import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, LogIn, Loader2 } from 'lucide-react';
import { AuthAPI, SERVER_URL } from '../services/api';
import { Turnstile } from '@marsidev/react-turnstile';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (user: any) => void;
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  
  // Form State
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Google OAuth callback handler
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    
    if (code && state === 'google_login') {
      handleGoogleCallback(code);
    }
  }, []);

  const handleGoogleCallback = async (code: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${SERVER_URL}/api/auth/google-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      });
      
      const data = await response.json();
      
      if (data.success && data.token) {
        localStorage.setItem('pixel_token', data.token);
        localStorage.setItem('pixel_user', JSON.stringify(data.user));
        if (onSuccess) onSuccess(data.user);
        window.history.replaceState({}, document.title, window.location.pathname);
        onClose();
      } else {
        setError(data.error || 'Error al iniciar sesión con Google');
      }
    } catch (err) {
      setError('Error al procesar login con Google');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    const GOOGLE_CLIENT_ID = '910248888900-4c3r56auj6gje2b5v7vtrtj31q4733ku.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://rbxlatamstore.com';
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=email%20profile&state=google_login`;
    window.location.href = googleAuthUrl;
  };

  const handleSubmit = async () => {
    if (!turnstileToken) {
      setError('Por favor completa la verificación antibot');
      return;
    }
    
    setIsLoading(true);
    setError('');
    try {
      let res;
      if (mode === 'login') {
        res = await AuthAPI.login({ email: formData.email, password: formData.password, turnstileToken });
      } else {
        res = await AuthAPI.register({ ...formData, turnstileToken });
      }

      if (res.success) {
        localStorage.setItem('pixel_token', res.token);
        localStorage.setItem('pixel_user', JSON.stringify(res.user));
        if (onSuccess) onSuccess(res.user);
        onClose();
      } else {
        setError(res.error || 'Ocurrió un error');
      }
    } catch (err: any) {
      setError('Error de conexión con el servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="w-full max-w-[380px] bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)] pointer-events-auto relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Glows (Very subtle for the black theme) */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-pixel-primaryStart/10 blur-[80px] rounded-full" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-pixel-accent/10 blur-[80px] rounded-full" />
              </div>

              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-1.5 hover:bg-white/10 rounded-full transition-colors text-gray-500 hover:text-white z-20"
              >
                <X size={20} />
              </button>

              {/* Header - Centered */}
              <div className="text-center mb-8 pt-2">
                <h2 className="text-2xl font-black text-white tracking-tight leading-none mb-3">
                  {mode === 'login' ? 'Bienvenido' : 'Crear cuenta'}
                </h2>
                <p className="text-gray-400 text-xs font-medium max-w-[200px] mx-auto">
                  {mode === 'login' ? 'Entra a tu cuenta de RLS Store' : 'Únete a nuestra comunidad hoy'}
                </p>
              </div>

              {/* Tabs */}
              <div className="flex bg-white/5 p-1 rounded-2xl mb-6 relative">
                <motion.div
                  className="absolute inset-y-1 bg-gradient-to-r from-pixel-primary to-pixel-primaryEnd rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  initial={false}
                  animate={{
                    x: mode === 'login' ? 0 : '100%',
                    width: '50%'
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
                <button 
                  onClick={() => setMode('login')}
                  className={`flex-1 py-2 text-xs font-bold relative z-10 transition-colors ${mode === 'login' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Entrar
                </button>
                <button 
                  onClick={() => setMode('register')}
                  className={`flex-1 py-2 text-xs font-bold relative z-10 transition-colors ${mode === 'register' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Crear cuenta
                </button>
              </div>

              {/* Form */}
              <div className="space-y-3">
                {mode === 'register' && (
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-pixel-accent transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="Nombre de usuario" 
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-pixel-accent/50 focus:bg-white/[0.07] transition-all text-xs font-medium"
                    />
                  </div>
                )}
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-pixel-accent transition-colors" size={18} />
                  <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-pixel-accent/50 focus:bg-white/[0.07] transition-all text-xs font-medium"
                  />
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-pixel-accent transition-colors" size={18} />
                  <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-pixel-accent/50 focus:bg-white/[0.07] transition-all text-xs font-medium"
                  />
                </div>
              </div>

              {/* Cloudflare Turnstile */}
              <div className="mt-4 flex justify-center">
                <Turnstile
                  siteKey="0x4AAAAAADVl_MPRgtRfacZY"
                  onSuccess={(token: string) => setTurnstileToken(token)}
                />
              </div>

              {error && (
                <div className="mt-3 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <p className="text-[10px] text-red-400 font-bold text-center">{error}</p>
                </div>
              )}

              {mode === 'login' && (
                <div className="text-right mt-2.5">
                  <button className="text-[10px] font-bold text-gray-600 hover:text-pixel-accent transition-colors">¿Olvidaste tu contraseña?</button>
                </div>
              )}

              <button 
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full mt-6 bg-gradient-to-r from-pixel-primaryStart to-pixel-primaryEnd text-white py-3.5 rounded-xl font-black text-xs hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(20,0,172,0.4)] flex items-center justify-center gap-2"
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : (mode === 'login' ? 'Iniciar Sesión' : 'Registrarme')}
              </button>

              {/* Divider */}
              <div className="flex items-center my-6 gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[9px] font-black text-gray-700 uppercase tracking-widest">O continúa con</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Social Logins */}
              <div className="grid grid-cols-1 gap-3">
                <button 
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-2 bg-white py-3 rounded-xl hover:bg-gray-100 transition-all group shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm font-black text-gray-700">Continuar con Google</span>
                </button>
                <button 
                  onClick={() => window.location.href = `${SERVER_URL}/api/auth/discord`}
                  className="flex items-center justify-center gap-2 bg-[#5865F2] py-3 rounded-xl hover:bg-[#4752C4] transition-all group shadow-lg shadow-[#5865F2]/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="group-hover:scale-110 transition-transform">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                  </svg>
                  <span className="text-sm font-black text-white">Continuar con Discord</span>
                </button>
              </div>

              {/* Footer */}
              <p className="text-center mt-6 text-[9px] text-gray-600 font-medium leading-relaxed px-4">
                Al continuar, aceptas nuestros <span className="text-gray-400 hover:text-white cursor-pointer underline">Términos</span> y <span className="text-gray-400 hover:text-white cursor-pointer underline">Privacidad</span>.
              </p>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
