import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash.replace('#', '') || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    // Set initial active link
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <header className="header">
      <div className="header-logo">
        <div className="header-logo-icon">☕</div>
        <span className="header-logo-text" style={{ color: '#3a2521' }}>CoffeeHaus</span>
      </div>
      
      <nav className="header-nav">
        <a href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</a>
        <a href="#menu" className={activeLink === 'menu' ? 'active' : ''}>Menu</a>
        <a href="#blog" className={activeLink === 'blog' ? 'active' : ''}>Blog</a>
        <a href="#Media" className={activeLink === 'Media' ? 'active' : ''}>Media</a>
        <a href="#Contact" className={activeLink === 'Contact' ? 'active' : ''}>Contact</a>
      </nav>
      
    </header>
  );
};

export default Header;
