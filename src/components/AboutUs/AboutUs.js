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
          aliqua. Facilisi cras fermentum odio eu. Eu volutpat 
          facilisis mauris sit. Justo laoreet sit amet cursus sit amet
          dictum sit. Pellentesque pulvinar pellentesque habitant morbi
          tristique senectus. Velit aliquet sagittis id consectetur purus
          ut faucibus pulvinar elementum. Suspendisse interdum consectetur
          libero id faucibus nisl tincidunt eget. Pellentesque adipiscino
          commodo elit at imperdiet.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Facilisi cras fermentum odio eu. Eu volutpat 
          facilisis mauris sit. Justo laoreet sit amet cursus sit amet
          dictum sit. Pellentesque pulvinar pellentesque habitant morbi
          tristique senectus. Velit aliquet sagittis id consectetur purus
          ut faucibus pulvinar elementum. Suspendisse interdum consectetur
          libero id faucibus nisl tincidunt eget. Pellentesque adipiscino
          commodo elit at imperdiet.
      </div>
      <div className="image">
        <img src={aboutImage} alt="AboutUsImage" />
      </div>
    </div>
    
  </div>
);

export default aboutUs;
