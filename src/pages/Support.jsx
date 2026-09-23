import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Support = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-glow"></div>
        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="badge">Help Center</span>
            <h1 style={{ marginBottom: '16px' }}>Support & Contact</h1>
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
              We're here to help! If you have any questions, issues, or feedback regarding Campus Bazzar, please reach out to us.
            </p>
          </div>
          
          <div className="glass" style={{ padding: '40px', borderRadius: 'var(--radius-lg)' }}>
            <h3>Contact Us</h3>
            <p style={{ marginTop: '16px', marginBottom: '24px' }}>
              The fastest way to get help is by emailing our support team directly. We aim to respond to all inquiries within 24 hours.
            </p>
            <a href="mailto:bazzarcampus99@gmail.com" className="btn-primary">
              Email: bazzarcampus99@gmail.com
            </a>
          </div>

          <div className="glass" style={{ marginTop: '40px', padding: '40px', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h4>How do I become a verified student?</h4>
                <p style={{ marginTop: '8px' }}>You must sign up using your university email address (e.g. john.admissionno@galgotias.edu). We'll send a verification link to confirm your student status.</p>
              </div>
              <div>
                <h4>Is it safe to buy and sell on Campus Bazzar?</h4>
                <p style={{ marginTop: '8px' }}>Yes! Our platform is restricted to verified students only. We always recommend meeting in public campus areas for exchanges.</p>
              </div>
              <div>
                <h4>How much does it cost to list an item?</h4>
                <p style={{ marginTop: '8px' }}>Listing items on Campus Bazzar is completely free for students!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Support;
