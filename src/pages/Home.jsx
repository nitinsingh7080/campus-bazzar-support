import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import AboutUs from '../components/AboutUs';
import DownloadCTA from '../components/DownloadCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Features />
        <HowItWorks />
        <AboutUs />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;
