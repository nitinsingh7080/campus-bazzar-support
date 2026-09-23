import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <img src={logo} alt="Campus Bazzar" className="logo-image" />
              Campus Bazzar
            </h3>
            <p>The exclusive campus marketplace built for students to buy, sell, and connect safely.</p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><Link to="/#features">Features</Link></li>
              <li><Link to="/#how-it-works">How It Works</Link></li>
              <li><a href="#download">Download App</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:bazzarcampus99@gmail.com">bazzarcampus99@gmail.com</a></li>
              <li><Link to="/support">Help Center</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Campus Bazzar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
