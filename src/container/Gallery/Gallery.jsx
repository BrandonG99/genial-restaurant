import React from 'react';
import { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.restaurantdish2, images.restaurantdish1, images.restaurantdrink2, images.gallery03];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Gallery" />
        <h1 className="headtext__cormorant">
          Take A Look
        </h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2' }}>
          Enjoy browsing our gallery which showcases some of the outstanding food and drink we offer here at Génial. Want to see more? Check out our Instagram!
        </p>
        <button type="button" className="custom__button">View Instagram</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery image" />
              <BsInstagram className="gallery__image-icon"/>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icons" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icons" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
