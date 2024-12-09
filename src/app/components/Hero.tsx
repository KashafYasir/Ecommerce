import React from 'react';
import '../styles/HeroSection.css';

const Hero: React.FC = () => {
  return (
    <div id='hero' className="hero-section">
      
        
      <div className="hero-content">
        <h4>New Arrival</h4>
        <h1>Discover Our New Collection</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <div className="container">
          <button className='button'>Buy Now</button>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;

