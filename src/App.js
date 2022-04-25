import React, { useState } from 'react';

import { AboutUs, FindUs, Chef, Header, Footer, Gallery, Intro, Laurels, SpecialMenu, Reservations} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {

  return (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Reservations />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div> 
  )
};

export default App;
