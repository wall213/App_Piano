import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex items-center justify-between px-8 py-6 text-[11px] text-piano-muted uppercase tracking-wider bg-transparent">
      <div>
        © 2024 PIANO TRAINER PRACTICE. PRECISION IN EVERY NOTE.
      </div>
      <div className="flex gap-6">
        <span className="cursor-pointer hover:text-black transition-colors duration-200">TERMS</span>
        <span className="cursor-pointer hover:text-black transition-colors duration-200">PRIVACY</span>
        <span className="cursor-pointer hover:text-black transition-colors duration-200">METHODOLOGY</span>
      </div>
    </footer>
  );
};

export default Footer;
