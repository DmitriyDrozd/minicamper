import React, { FC } from 'react';
import { UNP } from '../../constants/contacts';
import Contacts from '../Contacts/Contacts';
import styles from './Footer.module.sass';

interface FooterProps {
}

const Footer: FC<FooterProps> = () => (
    <div className={styles.Footer}>
        <div className={styles.FooterContent}>
            <img src="logo.png" alt="логотип"/>
            <div className={styles.InfoLinks}>
                <div className={styles.InfoLinkItem}>
                    <h4 className={styles.InfoLinkTitle}>Аренда кемпера в Минске</h4>
                    <a className={styles.InfoLink} href="#">Аренда кемпера</a>
                    <a className={styles.InfoLink} href="#">Оплата</a>
                </div>
                <div className={styles.InfoLinkItem}>
                    <h4 className={styles.InfoLinkTitle}>Информация</h4>
                    <a className={styles.InfoLink} href="#">Условия аренды</a>
                    <a className={styles.InfoLink} href="#">Часто задаваемые вопросы</a>
                </div>
            </div>
            <Contacts lightTheme showMessengers UNP={UNP}/>
        </div>
    </div>
);

export default Footer;
