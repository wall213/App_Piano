import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-piano-gray text-piano-text">
      <Header />
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
