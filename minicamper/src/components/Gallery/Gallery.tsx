import React, {
    FC,
    useState
} from 'react';
import Carousel from 'react-material-ui-carousel';
import styles from './Gallery.module.sass';

interface GalleryProps {}

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
    const [isImgLoaded, setIsImgLoaded] = useState(false);

    return (
        <div id='gallery' className={styles.Gallery}>
            <h2 className={styles.Title}>Галерея</h2>
            {
                !isImgLoaded ? (
                    <img src={path + images[0]} alt={'загрузка фото'} onLoad={() => setIsImgLoaded(true)} />
                ) : (
                    <Carousel
                        autoPlay
                        stopAutoPlayOnHover
                        swipe
                        navButtonsAlwaysVisible
                        cycleNavigation
                        indicators
                        animation={'slide'}
                        className={styles.Carousel}
                    >
                        {images.map( (name, i) => <img loading='lazy' className={styles.GalleryItem} key={i} src={path + name} alt="фото кемпера" /> )}
                    </Carousel>
                )
            }
        </div>
    );
}

export default Gallery;
