import React from 'react';
import { ShieldCheck, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import './Highlights.css';

const Highlights = () => {
  const items = [
    { icon: <ShieldCheck />, title: 'Secure Transactions', subtitle: 'Verified student accounts' },
    { icon: <MessageCircle />, title: 'Instant Chat', subtitle: 'Negotiate in real-time' },
    { icon: <MapPin />, title: 'Campus Only', subtitle: 'Meet safely nearby' },
    { icon: <CheckCircle />, title: 'Quick Listings', subtitle: 'Post in seconds' },
  ];

  return (
    <section className="highlights">
      <div className="container">
        <div className="highlights-grid">
          {items.map((item, index) => (
            <div className="highlight-card" key={index}>
              <div className="highlight-icon">{item.icon}</div>
              <div className="highlight-text">
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
