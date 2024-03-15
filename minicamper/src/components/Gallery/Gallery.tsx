import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import React, {
    FC,
    useState
} from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ROUTE } from '../../constants/routes';

import { RoadIcon } from '../../icons/Road';
import ContentWrapper from '../../layout/ContentWrapper/ContentWrapper';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { isMobile } from '../../utils/device';
import styles from './Gallery.module.sass';

interface GalleryProps {
}

const PATH = 'gallery/';
const PATH_MOBILE = 'gallery-mobile/';
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
    const path = isMobile() ? PATH_MOBILE : PATH;
    const [fullScreenImage, setFullScreenImage] = useState<React.ReactNode>(null);
    const handleCloseFullScreen = () => {
        setFullScreenImage(null);
    }

    return (
        <div id={ROUTE.gallery} className={styles.GalleryWrapper}>
            <div className={styles.Background}>
                <RoadIcon/>
            </div>
            <ContentWrapper>
                <>
                    <Modal
                        className={styles.GalleryModal}
                        open={!!fullScreenImage}
                        onClose={handleCloseFullScreen}
                    >
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} onClick={handleCloseFullScreen}>
                            {fullScreenImage}
                        </Box>
                    </Modal>
                    <div className={styles.Gallery}>
                        <h2 className={styles.Title}>Галерея</h2>
                        <Carousel className={styles.Carousel} stopOnHover showStatus={false} onClickItem={(index, item) => setFullScreenImage(item)}>
                            {images.map((name) => (
                                <div key={name} className={styles.Slide}>
                                    <img src={path + name} loading="lazy" alt="фото кемпера"
                                         className={styles.GalleryItem}/>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </>
            </ContentWrapper>
        </div>
    );
};

export default Gallery;
