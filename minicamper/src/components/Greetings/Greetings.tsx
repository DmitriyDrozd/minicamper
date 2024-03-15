import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import React, {
    FC,
    useState
} from 'react';
import { RoadIcon } from '../../icons/Road';
import ContentWrapper from '../../layout/ContentWrapper/ContentWrapper';
import { isMobile } from '../../utils/device';
import styles from './Greetings.module.sass';

interface GreetingsProps {
}

const Greetings: FC<GreetingsProps> = () => {
    const photoPath = isMobile() ? 'main-mobile.jpg' : 'main.jpg';
    const [isFullScreenImage, setIsFullScreenImage] = useState<boolean>(false);
    const handleCloseFullScreen = () => setIsFullScreenImage(false)
    const handleOpenFullScreen = () => setIsFullScreenImage(true);

    return (
        <div className={styles.GreetingsWrapper}>
            <div className={styles.Background}>
                <RoadIcon/>
            </div>
            <ContentWrapper>
                <>
                    <Modal
                        className={styles.GalleryModal}
                        open={isFullScreenImage}
                        onClose={handleCloseFullScreen}
                    >
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} onClick={handleCloseFullScreen}>
                            <img src='main.jpg' loading="lazy" alt="фото кемпера"
                                 className={styles.PictureFullscreen}/>
                        </Box>
                    </Modal>
                    <div className={styles.Greetings}>
                        <img loading='lazy' className={styles.Picture} src={photoPath} alt='кемпер' onClick={handleOpenFullScreen}/>
                        <div className={styles.GreetingsText}>
                            <h1 className={styles.Rent}>Аренда автодома для настоящих искателей путешествий</h1>
                            <div className={styles.Travel}><div className={styles.Description}>Путешествуйте</div><div className={styles.Title}>без границ</div></div>
                        </div>
                    </div>
                </>
            </ContentWrapper>
        </div>
    );
}

export default Greetings;
