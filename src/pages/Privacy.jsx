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
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>Effective Date: September 23, 2026</p>
          </div>
          
          <div className="glass" style={{ padding: '40px', borderRadius: 'var(--radius-lg)' }}>
            <section style={{ marginBottom: '32px' }}>
              <h3>1. Introduction & Scope</h3>
              <p style={{ marginTop: '12px' }}>
                Welcome to Campus Bazzar! This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our mobile application (the "App"). Campus Bazzar is a student marketplace designed to connect university students. We are committed to protecting your personal information and respecting your privacy rights.
              </p>
              <p style={{ marginTop: '12px' }}>
                By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>
            
            <section style={{ marginBottom: '32px' }}>
              <h3>2. Exact Data We Collect</h3>
              <p style={{ marginTop: '12px' }}>
                We collect both information you provide directly to us and data collected automatically through your interaction with the App.
              </p>
              
              <h4 style={{ marginTop: '24px', fontSize: '1.1rem' }}>A. Information You Provide to Us (Active Inputs)</h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '8px' }}><strong>Account & Identity Data:</strong> When you create an account, we collect your first and last name, university email address (.edu or institutional equivalent), university name, course, branch, and current academic year.</li>
                <li style={{ marginBottom: '8px' }}><strong>Profile Data:</strong> You may optionally choose to upload a profile picture.</li>
                <li style={{ marginBottom: '8px' }}><strong>User-Generated Content:</strong> We collect and store the content of messages sent via our in-app chat, details of items you list for sale (including photographs, descriptions, price, and item condition), and any moderation reports you submit.</li>
              </ul>

              <h4 style={{ marginTop: '24px', fontSize: '1.1rem' }}>B. Information Collected Automatically (Passive Data)</h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '8px' }}><strong>App Usage & Interaction Data:</strong> We record your transaction milestones (e.g., Exchange Count) and community ratings to calculate a Trust Score. We also store local app preferences, such as blocked or muted users.</li>
                <li style={{ marginBottom: '8px' }}><strong>Device Permissions & Features:</strong> With your explicit permission, the App accesses your device's Camera and Photo Library solely to enable you to take and upload photos of marketplace listings and your profile image.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h3>3. How We Use Your Data</h3>
              <p style={{ marginTop: '12px' }}>
                We process your personal information strictly for legitimate app operations:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '8px' }}><strong>Marketplace Facilitation:</strong> To create and maintain your user account, verify your student status via your institutional email address, and enable you to buy, sell, and negotiate items.</li>
                <li style={{ marginBottom: '8px' }}><strong>Communication:</strong> To facilitate real-time messaging between prospective buyers and sellers.</li>
                <li style={{ marginBottom: '8px' }}><strong>Safety, Moderation & Trust:</strong> To compute user trust metrics, enforce community rules, process user reports, and enable safety tools like blocking and muting.</li>
                <li style={{ marginBottom: '8px' }}><strong>Performance & Local Experience:</strong> To maintain your authenticated session securely and cache images locally on your device for fast loading times.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h3>4. Third-Party Services & Data Sharing</h3>
              <p style={{ marginTop: '12px' }}>
                We do not sell, rent, or trade your personal data to third parties. We share data only with the essential service providers that support core application infrastructure:
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '8px' }}><strong>Supabase:</strong> Serves as our primary cloud backend. Your authentication credentials, account data, database records (listings, messages), and media files are securely transmitted to and hosted on Supabase servers.</li>
                <li style={{ marginBottom: '8px' }}><strong>Kingfisher:</strong> An open-source library used exclusively on your device to download and cache images (such as item photos and profile images) locally to optimize performance. Kingfisher does not transmit your personal data externally.</li>
              </ul>
            </section>
            
            <section style={{ marginBottom: '32px' }}>
              <h3>5. Data Retention and Account Deletion</h3>
              <p style={{ marginTop: '12px' }}>
                We retain your personal data only for as long as your account remains active or as required to provide marketplace functionality.
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginTop: '12px', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '8px' }}><strong>In-App Account Deletion:</strong> You have the right to permanently delete your account and all associated personal records at any time. You can initiate this immediately within the App by navigating to <strong>Profile &gt; Settings &gt; Delete Account</strong>.</li>
                <li style={{ marginBottom: '8px' }}><strong>Deletion Impact:</strong> Upon confirmation, your request directly triggers the backend deletion of your authentication credentials, user profile data, active listings, and associated uploaded media. This action is permanent and cannot be undone.</li>
              </ul>
            </section>
            
            <section style={{ marginBottom: '32px' }}>
              <h3>6. Children's Privacy</h3>
              <p style={{ marginTop: '12px' }}>
                Campus Bazzar is strictly intended for university and college students. The App is not directed toward children, and we do not knowingly collect personal information from individuals under the age of 13 (or under 18 where required by applicable local law). If we discover that personal data from a child has been collected, we will take immediate steps to remove that information from our databases.
              </p>
            </section>

            <section style={{ marginBottom: '32px' }}>
              <h3>7. Security Measures</h3>
              <p style={{ marginTop: '12px' }}>
                We implement standard technical and organizational security measures designed to protect your personal information from unauthorized access, alteration, disclosure, or accidental destruction. However, please note that no electronic transmission over the internet or storage system can be guaranteed to be 100% secure.
              </p>
            </section>
            
            <section style={{ marginBottom: '32px' }}>
              <h3>8. Changes to This Privacy Policy</h3>
              <p style={{ marginTop: '12px' }}>
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable legal requirements. Any modifications will be posted directly within the App with an updated effective date.
              </p>
            </section>

            <section>
              <h3>9. Contact Us</h3>
              <p style={{ marginTop: '12px' }}>
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us at:
              </p>
              <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
                <strong>Email:</strong> <a href="mailto:bazzarcampus99@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>bazzarcampus99@gmail.com</a>
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
