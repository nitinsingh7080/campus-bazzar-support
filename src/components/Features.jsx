import React from 'react';
import { LayoutGrid, PlusCircle, Hand, MessageCircle, FileQuestion, Search } from 'lucide-react';
import './Features.css';

import featHome from '../assets/images/feat_home.png';
import featList from '../assets/images/feat_list.png';
import featRequest from '../assets/images/feat_request.png';
import featChat from '../assets/images/feat_chat.png';
import featNeed from '../assets/images/feat_need.png';

const Features = () => {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Features</span>
          <h2>Everything You Need, Right on Campus</h2>
          <p className="section-subtitle">
            A vibrant marketplace designed exclusively for the needs of college students.
          </p>
        </div>

        <div className="features-container">
          {/* Feature 1: Home / Browse & Search */}
          <div className="feature-card animate-fade-up">
            <div className="feature-info">
              <div className="feature-badge">
                <LayoutGrid size={16} /> Explore & Discover
              </div>
              <h3>Browse Campus Zones & Search</h3>
              <p>See all recently uploaded items organized by tailored categories like Academics, Hostel & Living, and Tech.</p>
              <ul className="feature-list">
                <li><span><Search size={16} /></span> Browse or search for exactly what you need</li>
                <li><span>✓</span> View trending hashtags and popular items</li>
                <li><span>✓</span> Clean, easy-to-navigate home feed</li>
              </ul>
            </div>
            <div className="feature-image bg-blue">
              <div className="apple-bezel">
                <img src={featHome} alt="Home Screen with Categories" />
              </div>
            </div>
          </div>

          {/* Feature 2: Post Item */}
          <div className="feature-card reverse animate-fade-up">
            <div className="feature-info">
              <div className="feature-badge">
                <PlusCircle size={16} /> List Items
              </div>
              <h3>Post Items in Seconds</h3>
              <p>Easily add the details of items you want to sell. Add photos, set the price, and choose if it's negotiable.</p>
              <ul className="feature-list">
                <li><span>✓</span> Upload up to 5 images per listing</li>
                <li><span>✓</span> Add hashtags and categorized details</li>
                <li><span>✓</span> Let buyers request your posted items easily</li>
              </ul>
            </div>
            <div className="feature-image bg-orange">
              <div className="apple-bezel">
                <img src={featList} alt="Post Item Screen" />
              </div>
            </div>
          </div>

          {/* Feature 3: Request Item */}
          <div className="feature-card animate-fade-up">
            <div className="feature-info">
              <div className="feature-badge">
                <Hand size={16} /> Request to Buy
              </div>
              <h3>Simple Item Requests</h3>
              <p>Found something you like? You can instantly request the item directly from the item's detail page by clicking on the Request button.</p>
              <ul className="feature-list">
                <li><span>✓</span> View full item details and seller rating</li>
                <li><span>✓</span> See if the price is negotiable</li>
                <li><span>✓</span> One-tap request process</li>
              </ul>
            </div>
            <div className="feature-image bg-gray">
              <div className="apple-bezel">
                <img src={featRequest} alt="Request Item Page" />
              </div>
            </div>
          </div>

          {/* Feature 4: Secure Chat */}
          <div className="feature-card reverse animate-fade-up">
            <div className="feature-info">
              <div className="feature-badge">
                <MessageCircle size={16} /> Secure Chat
              </div>
              <h3>Private & Controlled Messaging</h3>
              <p>Your inbox remains spam-free. If you are selling an item, buyers can only message you <strong>after you accept their request</strong>.</p>
              <ul className="feature-list">
                <li><span>✓</span> Seller controls who can initiate chat</li>
                <li><span>✓</span> Negotiate and decide on a meetup spot</li>
                <li><span>✓</span> Privacy-first communication</li>
              </ul>
            </div>
            <div className="feature-image bg-blue">
              <div className="apple-bezel">
                <img src={featChat} alt="Secure Chat Interface" />
              </div>
            </div>
          </div>

          {/* Feature 5: Ask Need */}
          <div className="feature-card animate-fade-up">
            <div className="feature-info">
              <div className="feature-badge">
                <FileQuestion size={16} /> Needs Board
              </div>
              <h3>Can't Find It? Post a Need</h3>
              <p>If the item you want isn't on the app, simply post a Need. Anyone who has that item lying unused can easily list it for you!</p>
              <ul className="feature-list">
                <li><span>✓</span> Specify exactly what you're looking for</li>
                <li><span>✓</span> Set a deadline for when you need it</li>
                <li><span>✓</span> Connect with sellers who have it</li>
              </ul>
            </div>
            <div className="feature-image bg-orange">
              <div className="apple-bezel">
                <img src={featNeed} alt="Post a Need Screen" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
