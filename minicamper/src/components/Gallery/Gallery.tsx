import React, { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import styles from './Gallery.module.sass';

interface GalleryProps {}

const path = 'gallery/';
const images = ['1.jpg'];

const Gallery: FC<GalleryProps> = () => (
  <div className={styles.Gallery}>
      <h2>Галерея</h2>
      <Carousel
          autoPlay
          stopAutoPlayOnHover
          swipe
          navButtonsAlwaysVisible
          cycleNavigation
          animation={'slide'}
          indicators={false}
      >
          {images.map( (name, i) => <img className={styles.GalleryItem} key={i} src={path + name} alt="фото кемпера" /> )}
      </Carousel>
  </div>
);

export default Gallery;
