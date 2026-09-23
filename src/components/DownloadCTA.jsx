import React from 'react';
import { Apple } from 'lucide-react';
import './DownloadCTA.css';

const DownloadCTA = () => {
  return (
    <section className="download-section" id="download">
      <div className="container">
        <div className="download-card animate-fade-up">
          <div className="download-content">
            <h2>Join Your Campus Marketplace Today</h2>
            <p>Join thousands of verified students who trust Campus Bazzar for safe, easy, and fast trading.</p>
            
            <a href="https://testflight.apple.com" target="_blank" rel="noopener noreferrer" className="appstore-btn">
              <Apple size={28} />
              <div className="appstore-text">
                <small>Download on</small>
                <span>TestFlight</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
