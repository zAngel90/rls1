import React from 'react'; // Refreshed routes
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import RobuxCatalog from './pages/RobuxCatalog';
import Checkout from './pages/Checkout';
import Reviews from './pages/Reviews';
import GameItems from './pages/GameItems';
import Groups from './pages/Groups';
import Account from './pages/Account';
import Chat from './pages/Chat';
import Admin from './pages/Admin';
import Fortnite from './pages/Fortnite';
import OrderDetails from './pages/OrderDetails';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

import PageLoader from './components/PageLoader';
import ScrollToTop from './components/ScrollToTop';
import { Wrench, Clock } from 'lucide-react';

// 🔧 MODO MANTENIMIENTO - Cambia a false para activar la página
const MAINTENANCE_MODE = false;

function MaintenanceScreen() {
  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#0A0F1E] via-[#0D1425] to-[#0A0F1E] flex items-center justify-center p-4">
      <StarBackground />
      <div className="relative z-10 max-w-2xl w-full">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          {/* Icono animado */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-2xl">
                <Wrench size={48} className="text-black animate-bounce" />
              </div>
            </div>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Sitio en Mantenimiento
          </h1>

          {/* Descripción */}
          <p className="text-xl text-gray-300 mb-6">
            Estamos realizando mejoras para brindarte una mejor experiencia
          </p>

          {/* Detalles */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-yellow-400 mb-3">
              <Clock size={20} />
              <span className="font-bold">Tiempo estimado</span>
            </div>
            <p className="text-gray-400">
              Estaremos de vuelta pronto. Disculpa las molestias.
            </p>
          </div>

          {/* Redes sociales */}
          <div className="space-y-3">
            <p className="text-sm text-gray-500 mb-4">Mantente informado en nuestras redes:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a 
                href="https://discord.gg/hCbXgCGJWr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded-xl transition-all transform hover:scale-105"
              >
                Discord
              </a>
              <a 
                href="https://wa.me/message/VZYKMCR3JCGCP1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-xl transition-all transform hover:scale-105"
              >
                WhatsApp
              </a>
              <a 
                href="https://www.tiktok.com/@rlsrobuxstore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black hover:bg-gray-900 text-white font-bold rounded-xl transition-all transform hover:scale-105"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              RLS Store
            </p>
            <p className="text-sm text-gray-500 mt-2">RBX Latam Store</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isIngame = location.pathname.startsWith('/catalog/ingame');
  const isGameItems = location.pathname === '/game-items';
  const isCheckout = location.pathname === '/checkout';
  const isChat = location.pathname === '/chat';
  const isAdmin = location.pathname.startsWith('/z_25ji16ls');
  const isNoUI = isIngame || isGameItems || isCheckout || isChat || isAdmin;

  // Auto-login desde OAuth redirect (solo al montar)
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const userStr = params.get('user');

    if (token && userStr) {
      localStorage.setItem('pixel_token', token);
      localStorage.setItem('pixel_user', userStr);
      window.history.replaceState({}, document.title, window.location.pathname);
      window.location.reload();
    }
  }, []);

  // Si está en modo mantenimiento, mostrar solo la pantalla de mantenimiento (excepto para admin)
  if (MAINTENANCE_MODE && !isAdmin) {
    return <MaintenanceScreen />;
  }

  return (
    <div className={`font-sans selection:bg-blue-500/30 flex flex-col bg-pixel-bg ${isNoUI ? 'lg:h-screen lg:overflow-hidden min-h-screen' : 'min-h-screen'}`}>
      <ScrollToTop />
      <PageLoader />
      {!isAdmin && <StarBackground />}
      {!isNoUI && <Navbar />}

      <main className={isIngame || isGameItems || isCheckout ? 'lg:flex-1 flex flex-col' : 'flex-grow'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/robux" element={<RobuxCatalog />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/account" element={<Account />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/catalog/ingame/:gameId" element={<GameItems />} />
          <Route path="/game-items" element={<GameItems />} />
          <Route path="/z_25ji16ls" element={<Admin />} />
          <Route path="/order/:orderId" element={<OrderDetails />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      {!isNoUI && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
