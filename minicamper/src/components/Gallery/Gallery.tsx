import React, { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { RoadIcon } from '../../icons/Road';
import ContentWrapper from '../../layout/ContentWrapper/ContentWrapper';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Gallery.module.sass';

interface GalleryProps {
}

const path = 'gallery/';
const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
];

const Gallery: FC<GalleryProps> = () => {
    return (
        <div id="gallery" className={styles.GalleryWrapper}>
            <div className={styles.Background}>
                <RoadIcon/>
            </div>
            <ContentWrapper>
                <div className={styles.Gallery}>
                    <h2 className={styles.Title}>Галерея</h2>
                    <Carousel className={styles.Carousel} stopOnHover showStatus={false}>
                        {images.map((name, i) => (
                            <div key={name} className={styles.Slide}>
                                <img src={path + name} loading="lazy" alt="фото кемпера"
                                     className={styles.GalleryItem}/>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Gallery;
