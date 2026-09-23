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
            
            <a href="#" className="appstore-badge" style={{ display: 'inline-block' }}>
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style={{ height: '64px' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
