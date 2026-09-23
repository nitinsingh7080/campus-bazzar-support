import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="pill-nav">
        <Link to="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <img src={logo} alt="Campus Bazzar" className="logo-image" />
          <span className="logo-text">Campus Bazzar</span>
        </Link>

        <div className="nav-links desktop-only">
          {location.pathname !== '/' && <Link to="/" className="nav-link">Home</Link>}
          <a href={location.pathname === '/' ? '#features' : '/#features'} className="nav-link">Features</a>
          <a href={location.pathname === '/' ? '#how-it-works' : '/#how-it-works'} className="nav-link">How It Works</a>
          <a href={location.pathname === '/' ? '#about' : '/#about'} className="nav-link">About Us</a>
          <Link to="/privacy" className="nav-link">Privacy</Link>
          <Link to="/support" className="nav-link">Support</Link>
          <a href={location.pathname === '/' ? '#download' : '/#download'} className="nav-link cta-link">Download</a>
        </div>

        <button className="mobile-menu-btn mobile-only" onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu glass">
          <Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
          <a href={location.pathname === '/' ? '#features' : '/#features'} className="mobile-link" onClick={toggleMenu}>Features</a>
          <a href={location.pathname === '/' ? '#how-it-works' : '/#how-it-works'} className="mobile-link" onClick={toggleMenu}>How It Works</a>
          <a href={location.pathname === '/' ? '#about' : '/#about'} className="mobile-link" onClick={toggleMenu}>About Us</a>
          <Link to="/privacy" className="mobile-link" onClick={toggleMenu}>Privacy</Link>
          <Link to="/support" className="mobile-link" onClick={toggleMenu}>Support</Link>
          <a href={location.pathname === '/' ? '#download' : '/#download'} className="mobile-link cta-link-mobile" onClick={toggleMenu}>Download App</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
