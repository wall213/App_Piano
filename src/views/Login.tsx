import React from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-piano-gray">
      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="glass-panel p-8 md:p-10 rounded-3xl space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-piano-black">Bienvenido</h2>
            <p className="text-piano-muted">Ingresa tus credenciales para continuar</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-piano-black ml-1" htmlFor="email">
                  Correo Electrónico
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-piano-muted group-focus-within:text-piano-black transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="nombre@ejemplo.com"
                    className="w-full pl-11 pr-4 py-3 bg-white/50 border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-piano-muted/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-sm font-medium text-piano-black" htmlFor="password">
                    Contraseña
                  </label>
                  <a href="#" className="text-xs text-piano-muted hover:text-piano-black transition-colors">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-piano-muted group-focus-within:text-piano-black transition-colors">
                    <Lock size={18} />
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 bg-white/50 border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all placeholder:text-piano-muted/50"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-piano-black text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-brand-hover active:scale-[0.98] transition-all shadow-lg shadow-black/10 group"
            >
              Iniciar Sesión
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-black/5"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-transparent px-4 text-piano-muted font-medium">O continuar con</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 bg-white border border-black/5 rounded-2xl hover:bg-piano-gray transition-colors font-medium text-sm">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 grayscale opacity-70" />
              Google
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-piano-muted">
            ¿No tienes una cuenta?{' '}
            <Link to="#" className="text-piano-black font-semibold hover:underline underline-offset-4">
              Regístrate gratis
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
