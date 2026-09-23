import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-glow"></div>
        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div className="section-header">
            <span className="badge">Legal</span>
            <h1 style={{ marginBottom: '16px' }}>Privacy Policy</h1>
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>Last updated: September 23, 2026</p>
          </div>
          
          <div className="glass" style={{ padding: '40px', borderRadius: 'var(--radius-lg)' }}>
            <section style={{ marginBottom: '32px' }}>
              <h3>1. Introduction</h3>
              <p style={{ marginTop: '12px' }}>
                Welcome to Campus Bazzar. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you use our iOS application and tell you about your privacy rights and how the law protects you.
              </p>
            </section>
            
            <section>
              <h3>2. Data We Collect</h3>
              <p style={{ marginTop: '12px' }}>
                We may collect, use, store and transfer different kinds of personal data about you, including:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', color: 'var(--text-secondary)' }}>
                <li>Identity Data (First name, last name, .edu email address)</li>
                <li>Profile Data (Your listings, requests, ratings, and profile image)</li>
                <li>Contact Data (Email address for verification and support)</li>
                <li>Content Data (Messages sent through our in-app chat)</li>
              </ul>
            </section>

            <section>
              <h3>3. How We Use Your Data</h3>
              <p style={{ marginTop: '12px' }}>
                We will only use your personal data when the law allows us to. Most commonly, we use your data to:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', color: 'var(--text-secondary)' }}>
                <li>Verify your student status to keep the marketplace safe</li>
                <li>Manage your account and listings</li>
                <li>Enable communication between buyers and sellers</li>
                <li>Improve our application and user experience</li>
              </ul>
            </section>

            <section>
              <h3>4. Data Security</h3>
              <p style={{ marginTop: '12px' }}>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
              </p>
            </section>

            <section>
              <h3>5. Contact Us</h3>
              <p style={{ marginTop: '12px' }}>
                If you have any questions about this privacy policy or our privacy practices, please contact us at <strong>bazzarcampus99@gmail.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
