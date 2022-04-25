import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
       <SubHeading  title="Experience A New Level Of Dining"/>
       <h1 className="app__header-h1">FRENCH CUISINE IN NEW YORK</h1>
       <p className="p__opensans" style={{ margin: '2rem 0' }}>Enjoy Food Beyond Comparison And Memories That Will Last You An Entire Life Time ... We Mean It!</p>
       <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header image" />
    </div>
  </div>
);

export default Header;
