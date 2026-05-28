import React, { useEffect, useState } from 'react';
import { OrdersAPI, ChatAPI, SERVER_URL } from '../services/api';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const CATALOG_URL = 'https://rls2.vercel.app/';

// Helper para convertir nombre a slug
const nameToSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9]+/g, '-') // Reemplazar caracteres especiales con guiones
    .replace(/^-+|-+$/g, ''); // Remover guiones al inicio y final
};

export default function GameItems() {
  const navigate = useNavigate();
  const { gameId } = useParams<{ gameId: string }>();
  const [searchParams] = useSearchParams();
  const [gamesMap, setGamesMap] = useState<{ slugToId: Record<string, string>; idToSlug: Record<string, string> }>({
    slugToId: {},
    idToSlug: {}
  });

  // Cargar juegos dinámicamente desde la API
  useEffect(() => {
    const loadGames = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/admin/games-config?all=true`);
        if (response.data?.success && Array.isArray(response.data.data)) {
          const slugToId: Record<string, string> = {};
          const idToSlug: Record<string, string> = {};
          
          response.data.data.forEach((game: any) => {
            const slug = nameToSlug(game.name);
            slugToId[slug] = game.id;
            idToSlug[game.id] = slug;
          });
          
          setGamesMap({ slugToId, idToSlug });
        }
      } catch (err) {
        console.error('Error loading games:', err);
      }
    };
    
    loadGames();
  }, []);

  // Escucha mensajes del iframe (cross-origin seguro)
  useEffect(() => {
    const fetchNotifications = async (targetWindow: Window) => {
      const user = JSON.parse(localStorage.getItem('pixel_user') || 'null');
      if (!user) return;

      try {
        const [ordersRes, chatsRes] = await Promise.all([
          OrdersAPI.getUserOrders(user.id),
          ChatAPI.getChats()
        ]);

        const realNotifications: any[] = [];
        if (ordersRes.success && Array.isArray(ordersRes.data)) {
          // Only show orders that have not been seen
          ordersRes.data.filter((o: any) => !o.seen).forEach((order: any) => {
            let statusText = 'está en revisión';
            if (order.status === 'completed') statusText = 'ha sido completado ✅';
            if (order.status === 'cancelled') statusText = 'ha sido cancelado ❌';

            realNotifications.push({
              id: `order-${order.id}`,
              title: `Pedido ${order.id}`,
              desc: `Tu pedido de ${order.amount} Robux ${statusText}`,
              time: new Date(order.createdAt).toLocaleDateString(),
              type: 'orders'
            });
          });
        }

        if (chatsRes.success && Array.isArray(chatsRes.data)) {
          // Only show chats with unread messages
          chatsRes.data.filter((c: any) => c.unreadCount > 0).forEach((chat: any) => {
            realNotifications.push({
              id: `chat-${chat.id}`,
              title: chat.userName || 'Soporte Pixel',
              desc: chat.lastMessage || 'Tienes un chat activo',
              time: 'Ahora',
              type: 'chats'
            });
          });
        }

        if (realNotifications.length === 0) {
          realNotifications.push({
            id: 'welcome',
            title: '¡Bienvenido!',
            desc: 'Aún no tienes pedidos, ¡haz el primero!',
            time: 'Ahora',
            type: 'info'
          });
        }

        const robloxAvatar = `${SERVER_URL}/api/users/avatar/${user.id}`;
        let finalAvatar = user.image || user.avatar || robloxAvatar;
        
        // Fix relative URLs by prepending the SERVER_URL
        if (finalAvatar && !finalAvatar.startsWith('http')) {
          finalAvatar = `${SERVER_URL}${finalAvatar.startsWith('/') ? '' : '/'}${finalAvatar}`;
        }

        targetWindow.postMessage({
          action: 'syncAuth',
          user: { ...user, avatar: finalAvatar },
          notifications: realNotifications
        }, '*');
      } catch (err) {
        console.error('Error fetching notifications:', err);
      }
    };

    const handler = (event: MessageEvent) => {
      if (event.data?.action === 'navigateTo' && event.data?.url) {
        navigate(event.data.url);
      }
      
      if (event.data?.action === 'login') {
        console.log('🔐 Solicitud de login desde tienda estática, abriendo modal...');
        // Intentar ambos métodos para asegurar que funcione
        document.dispatchEvent(new CustomEvent('openAuthModal'));
        // También navegar a home con parámetro login
        navigate('/?login=true');
      }

      if (event.data?.action === 'ready') {
        // El catálogo nos avisó que ya cargó, le enviamos los datos
        if (event.source) {
          fetchNotifications(event.source as Window);
        }
      }

      if (event.data?.action === 'logout') {
        localStorage.removeItem('pixel_token');
        localStorage.removeItem('pixel_user');
        window.location.reload();
      }

      if (event.data?.action === 'checkout') {
        const { user, cart, total, currency, appliedCoupon, ...rest } = event.data;
        navigate('/checkout', { 
          state: { 
            username: user.displayName || user.name,
            userId: user.id,
            amount: total,
            cart: cart,
            currency: currency || 'COP',
            fromWebview: true,
            coupon: appliedCoupon, // Mapear appliedCoupon a coupon
            ...rest
          } 
        });
      }

      if (event.data?.action === 'clearNotifications') {
        const user = JSON.parse(localStorage.getItem('pixel_user') || 'null');
        if (user && user.id) {
          Promise.all([
            OrdersAPI.markAllSeen(user.id),
            ChatAPI.markAllAsRead(user.id)
          ]).catch(err => console.error('Error marking notifications as seen:', err));
        }
      }

      // Escuchar cambios de juego desde el iframe para actualizar la URL
      if (event.data?.action === 'gameChanged' && event.data?.gameId) {
        const slug = gamesMap.idToSlug[event.data.gameId] || event.data.gameId;
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.set('game', slug);
        const newUrl = `/game-items?${currentParams.toString()}`;
        
        // Usar history.replaceState para actualizar la URL sin recargar
        window.history.replaceState(null, '', newUrl);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [navigate, gamesMap]);

  // Construir la URL del iframe con todos los parámetros
  const buildIframeUrl = () => {
    const params = new URLSearchParams(window.location.search);
    
    // Obtener el game slug de los parámetros
    const gameSlug = searchParams.get('game');
    
    // Si hay gameSlug, convertirlo a ID y agregarlo a los parámetros del iframe
    if (gameSlug) {
      const actualGameId = gamesMap.slugToId[gameSlug] || gameSlug;
      params.set('game', actualGameId);
    }
    
    // Si hay gameId en la ruta, agregarlo/sobrescribirlo en los parámetros
    if (gameId) {
      const actualGameId = gamesMap.slugToId[gameId] || gameId;
      params.set('game', actualGameId);
    }
    
    // Construir la URL final
    const queryString = params.toString();
    return `${CATALOG_URL}${queryString ? '?' + queryString : ''}`;
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-[#0B0F16] text-white font-sans overflow-hidden">

      {/* Iframe que ocupa todo el espacio restante */}
      <iframe
        src={buildIframeUrl()}
        title="Catálogo de Items"
        className="flex-1 w-full border-none"
        style={{ display: 'block' }}
        allow="clipboard-write"
      />
    </div>
  );
}
