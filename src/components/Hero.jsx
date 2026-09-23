import React from 'react';
import './Hero.css';
import heroImg from '../assets/images/media_1790157561215.jpg';
import logo from '../assets/images/logo.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="container">
        <div className="hero-content animate-fade-up">
          <div className="badge">Campus Bazzar</div>
          <h1 className="hero-title">
            Your Ultimate <br/>
            <span className="gradient-text">Campus Marketplace</span>
          </h1>
          <p className="hero-subtitle">
            Buy, sell, and connect exclusively with verified students on your campus. Discover textbooks, gadgets, and more—safely and instantly.
          </p>
          
          <div className="hero-actions">
            <a href="#download" className="btn-primary">
              Download for iOS
            </a>
            <a href="#features" className="btn-secondary">
              Explore Features
            </a>
          </div>
        </div>

        {/* Actual App Screenshot in Apple Bezel */}
        <div className="hero-image-wrapper animate-fade-up" style={{animationDelay: '0.2s'}}>
          <div className="apple-bezel" style={{ transform: 'rotateX(10deg)', boxShadow: '0 30px 60px rgba(0,0,0,0.3)', width: '300px' }}>
            <img src={heroImg} alt="Campus Bazzar Home Screen" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
