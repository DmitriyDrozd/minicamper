import React, { FC } from 'react';
import { UNP } from '../../constants/contacts';
import { LINKS } from '../../constants/routes';
import { LogoBigIcon } from '../../icons/LogoBig';
import { scrollToById } from '../../utils/scroll';
import Contacts from '../Contacts/Contacts';
import styles from './Footer.module.sass';

interface FooterProps {
}

const Footer: FC<FooterProps> = () => (
    <div id='contacts' className={styles.Footer}>
        <div className={styles.FooterContent}>
            <LogoBigIcon className={styles.LogoBig}/>
            <div className={styles.InfoLinks}>
                <div className={styles.InfoLinkItem}>
                    <h4 className={styles.InfoLinkTitle}>Аренда кемпера в Минске</h4>
                    {LINKS.map(({ title, url }) => <span onClick={scrollToById(url)} className={styles.InfoLink}>{title}</span>)}
                </div>
            </div>
            <Contacts lightTheme showMessengers UNP={UNP}/>
        </div>
    </div>
);

export default Footer;
