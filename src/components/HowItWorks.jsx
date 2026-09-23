import React from 'react';
import { UserPlus, Search, Handshake } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus size={32} />,
      title: 'Sign Up & Verify',
      desc: 'Create an account using your university email (e.g. john.admissionno@galgotias.edu) to join the exclusive campus network.'
    },
    {
      icon: <Search size={32} />,
      title: 'Browse or List',
      desc: 'Search for what you need or snap a quick photo to list your own items for sale.'
    },
    {
      icon: <Handshake size={32} />,
      title: 'Meet & Trade',
      desc: 'Chat securely in-app and arrange a safe meetup spot on campus to complete the trade.'
    }
  ];

  return (
    <section className="section section-secondary" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Simple Setup</span>
          <h2>Get Started in 3 Simple Steps</h2>
          <p className="section-subtitle">
            Joining Campus Bazzar takes less than 2 minutes on your iPhone.
          </p>
        </div>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div className="step-card animate-fade-up" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
