import React, { FC } from 'react';
import {
    LINKS,
    ROUTE
} from '../../constants/routes';
import { LogoBigIcon } from '../../icons/LogoBig';
import { useApplicationContext } from '../../store/applicationContext';
import { isMobile } from '../../utils/device';
import { scrollToById } from '../../utils/scroll';
import Contacts from '../Contacts/Contacts';
import styles from './Footer.module.sass';

interface FooterProps {
}

const Footer: FC<FooterProps> = () => {
    const { contacts: { unp } } = useApplicationContext();

    return (
        <div id={ROUTE.contacts} className={styles.Footer}>
            <div className={styles.FooterContent}>
                {!isMobile() && (
                    <LogoBigIcon className={styles.LogoBig}/>
                )}
                <div className={styles.InfoLinks}>
                    <div className={styles.InfoLinkItem}>
                        <h4 className={styles.InfoLinkTitle}>Аренда кемпера в Минске</h4>
                        {LINKS.map(({ title, url }) => <span onClick={scrollToById(url)} className={styles.InfoLink} key={title}>{title}</span>)}
                    </div>
                </div>
                <Contacts lightTheme showMessengers UNP={unp}/>
            </div>
        </div>
    );
}

export default Footer;
