import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { User, LogIn, Settings, UserCircle, LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full flex items-center justify-between px-8 py-6 bg-transparent relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <h1 className="text-xl font-bold tracking-[0.2em] uppercase text-black">
            PianoTrainer
          </h1>
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <NavLink 
          to="/practice" 
          className={({ isActive }) => 
            `text-sm transition-colors duration-200 hover:text-black ${isActive ? 
            'text-black font-medium border-b border-black pb-1' : 'text-piano-muted'}`
          }
        >
          Practica
        </NavLink>
      </nav>

      {/* User Icon & Dropdown */}
      <div className="relative" ref={menuRef}>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
            isMenuOpen ? 'bg-black text-white' : 'hover:bg-black/5 text-black'
          }`}
        >
          <User size={20} />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-3 w-56 glass-panel rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right">
            <div className="p-2 space-y-1">
              <div className="px-4 py-3 border-b border-black/5 mb-1">
                <p className="text-xs font-semibold text-piano-muted uppercase tracking-wider">Invitado</p>
              </div>
              
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-piano-black hover:bg-black/5 rounded-xl transition-colors group"
              >
                <LogIn size={18} className="text-piano-muted group-hover:text-piano-black transition-colors" />
                <span>Iniciar Sesión</span>
              </Link>

              <div className="h-px bg-black/5 my-1" />

              <button
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-piano-black hover:bg-black/5 rounded-xl transition-colors group cursor-pointer"
              >
                <Settings size={18} className="text-piano-muted group-hover:text-piano-black transition-colors" />
                <span>Ajustes</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
