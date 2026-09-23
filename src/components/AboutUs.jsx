import React from 'react';
import './AboutUs.css';

import nitinImg from '../assets/images/team_nitin.jpg';
import shantanuImg from '../assets/images/team_shantanu.jpg';
import avnishImg from '../assets/images/team_avnish.png';
import vaibhavImg from '../assets/images/team_vaibhav.jpg';

const AboutUs = () => {
  const team = [
    { name: 'Nitin Singh', image: nitinImg, role: 'Developer' },
    { name: 'Shantanu Sharma', image: shantanuImg, role: 'Developer' },
    { name: 'Avnish Bahrdwaj', image: avnishImg, role: 'Developer' },
    { name: 'Vaibhav Singh', image: vaibhavImg, role: 'Developer' }
  ];

  return (
    <section className="section section-secondary" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">About Us</span>
          <h2>Meet Team 11</h2>
          <p className="section-subtitle">
            We are the passionate creators behind Campus Bazzar, dedicated to building the ultimate marketplace exclusively for students.
          </p>
        </div>

        <div className="about-content">
          <div className="mentor-highlight glass">
            <h3>Under the Guidance Of</h3>
            <p className="mentor-name">Mrs. Shruti Sachdeva Ma'am</p>
            <p className="mentor-title">Project Mentor</p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div className="team-card animate-fade-up" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-image" />
                </div>
                <h4>{member.name}</h4>
                <span className="team-role">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
