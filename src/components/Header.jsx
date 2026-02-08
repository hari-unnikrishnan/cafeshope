import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash.replace('#', '') || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    // Set initial active link
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (link) => {
    setActiveLink(link);
    closeMobileMenu();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeMobileMenu();
    }
  };

  return (
    <header className="header">
      <div className="header-logo">
        <div className="header-logo-icon">☕</div>
        <span className="header-logo-text" style={{ color: '#3a2521' }}>CoffeeHaus</span>
      </div>
      
      {/* Mobile Menu Toggle Button */}
      <button 
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      
      {/* Overlay - click to close */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? '' : 'hidden'}`}
        onClick={handleOverlayClick}
      ></div>
      
      <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <a 
          href="#home" 
          className={activeLink === 'home' ? 'active' : ''}
          onClick={() => handleNavClick('home')}
        >
          <span className="nav-icon"></span> Home
        </a>
        <a 
          href="#menu" 
          className={activeLink === 'menu' ? 'active' : ''}
          onClick={() => handleNavClick('menu')}
        >
          <span className="nav-icon"></span> Menu
        </a>
        <a 
          href="#blog" 
          className={activeLink === 'blog' ? 'active' : ''}
          onClick={() => handleNavClick('blog')}
        >
          <span className="nav-icon"></span> Blog
        </a>
        <a 
          href="#Media" 
          className={activeLink === 'Media' ? 'active' : ''}
          onClick={() => handleNavClick('Media')}
        >
          <span className="nav-icon"></span> Media
        </a>
        <a 
          href="#Contact" 
          className={activeLink === 'Contact' ? 'active' : ''}
          onClick={() => handleNavClick('Contact')}
        >
          <span className="nav-icon"></span> Contact
        </a>
      </nav>
      
    </header>
  );
};

export default Header;
