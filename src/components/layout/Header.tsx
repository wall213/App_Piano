import React from 'react';
import { NavLink } from 'react-router-dom';
import { User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between px-8 py-6 bg-transparent">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold tracking-[0.2em] uppercase text-black">
          PianoTrainer
        </h1>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <NavLink 
          to="/practice" 
          className={({ isActive }) => 
            `text-sm transition-colors duration-200 hover:text-black ${isActive ? 'text-black font-medium border-b border-black pb-1' : 'text-piano-muted'}`
          }
        >
          Practice
        </NavLink>
        <span className="text-sm text-piano-muted cursor-pointer hover:text-black transition-colors duration-200">
          Exercises
        </span>
        <span className="text-sm text-piano-muted cursor-pointer hover:text-black transition-colors duration-200">
          Library
        </span>
        <span className="text-sm text-piano-muted cursor-pointer hover:text-black transition-colors duration-200">
          Settings
        </span>
      </nav>

      {/* User Icon */}
      <div>
        <button className="p-2 hover:bg-black/5 rounded-full transition-colors duration-200 cursor-pointer">
          <User size={20} className="text-black" />
        </button>
      </div>
    </header>
  );
};

export default Header;
