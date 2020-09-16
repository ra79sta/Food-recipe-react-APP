import React from 'react';

import aboutImage from '../../assets/Images/ABOUTUS IMAGE.jpg';
import './AboutUs.css';

const aboutUs = () => (
  <div>
    <h2 className='us'>About Us</h2>
    <div className="about">
      <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          commodo elit at imperdiet.
      </div>
      <div className="image">
        <img src={aboutImage} alt="AboutUsImage" />
      </div>
    </div>
    
  </div>
);

export default aboutUs;
