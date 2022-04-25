import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Image of Restaurant Chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">
        What We Believe In
      </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote marks" />
          <p className="p__opensans">
            With over 15 years of experience under his belt as Head Chef, Kevin Luo knows how to operate a kitchen effectively and professionally.</p>
        </div>
        <p className="p__opensans">
          Kevin and his team believe in warmly welcoming their guests upon arrival and providing the highest standards possible in French Cuisine at all times. If our guests are happy, we're happy!
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Founder & Chef, Génial Restaurant</p>
        <img src={images.sign} alt="Chef's sign" />
      </div>

    </div>
  </div>
);

export default Chef;
