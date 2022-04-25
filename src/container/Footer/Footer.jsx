import React from 'react';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="newsletter">
    <FooterOverlay />
    <Newsletter id="newsletter" />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">83 Lenington St, New York, NY 11213, USA</p>
        <p className="p__opensans">+1 914-555-0171</p>
        <p className="p__opensans">+1 914-555-0161</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.génialMain} alt="Footer Logo" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others".</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{ marginTop: 15 }}/>
        <div className="app__footer-links_icons">
          <FiTwitter />
          <FiInstagram />    
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon - Fri:</p>
        <p className="p__opensans">18:00 - 23:00</p>
        <p className="p__opensans">Sat - Sun:</p>
        <p className="p__opensans">18:00 - 23:00</p>
      </div>
    </div>
    
    <div className="footer__copyright">
      <p className="p__opensans">
      © 2022 Génial. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
