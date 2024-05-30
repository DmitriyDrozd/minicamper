import { Modal } from '@mui/material';
import Button from '@mui/material/Button';
import React, {
    FC,
    useEffect,
    useState
} from 'react';
import { ReactSVG } from 'react-svg';
import styles from './VivaBraslavBanner.module.sass';
import { isMobile as getIsMobile } from '../../utils/device';

interface VivaBraslavBannerProps {
}

const PROMO_TERM = '26-28 июля';

const VivaBraslavBanner: FC<VivaBraslavBannerProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const isMobile = getIsMobile();
    const srcBg = isMobile ? 'promo/viva-bg-mobile.png' : 'promo/viva-bg.png';
    const srcBgOverlay = isMobile ? 'promo/viva-bg-overlay-mobile.svg' : 'promo/viva-bg-overlay.svg'
    const srcLogo = isMobile ? 'promo/viva-logo-mobile.png' : 'promo/viva-logo.png';

    useEffect(() => {
        setTimeout(() => {
           setIsOpen(true);
        }, 3000);
    }, []);

    return (
        <Modal
            tabIndex={-1}
            className={styles.VivaModal}
            open={isOpen}
            onClose={handleClose}
        >
            <div className={styles.VivaBraslavBanner}>
                <div className={styles.VivaBackground}>
                    <img className={styles.VivaBackground} src={srcBg} alt='Viva Braslav' />
                    <ReactSVG className={styles.VivaBackgroundOverlay} src={srcBgOverlay} />
                    <ReactSVG className={styles.VivaBackgroundOverlay} src={srcBgOverlay} />
                </div>
                <div className={styles.vivaBraslavContent}>
                    <Button onClick={handleClose} className={styles.close}>
                        <ReactSVG className={styles.cloeIcon} src='icons/close-filled.svg' />
                    </Button>
                    <img className={styles.VivaLogo} src={srcLogo} alt='Viva Braslav музыкальный фестиваль' />
                    <div className={styles.VivaTerm}>{PROMO_TERM}</div>
                    <span className={styles.VivaLabel}>Успей забронировать <span className={styles.VivaLabelAccent}>кемпер</span> на самый грандиозный фестиваль этого лета!</span>
                </div>
            </div>
        </Modal>
    )
}

export default VivaBraslavBanner;
