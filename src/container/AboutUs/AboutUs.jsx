import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="Stylish Letter 'G'" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img"/>
        <p className="p__opensans">
         For over a decade, Génial has elevated the standard of French Cuisine fine dining restaurants. We warmly invite you to experience our award winning cuisine in the heart of New York.  
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.chef_knife} alt="" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img"/>
        <p className="p__opensans">
         Since opening in 2007, Génial has made a name for itself as one of the very best restaurants amongst New York City's competitive dining scene, receiving an array of awards for its refined French cuisine and world-class dining experience.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
