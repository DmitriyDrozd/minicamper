import React, { FC } from 'react';
import Contacts from '../Contacts/Contacts';
import styles from './Footer.module.sass';

interface FooterProps {
}

const Footer: FC<FooterProps> = () => (
    <div className={styles.Footer}>
        <div className={styles.FooterContent}>
            <img src="logo.png" alt="логотип"/>
            <div>
                <div>
                    <h4>Аренда кемпера в Минске</h4>
                    <a href="#">Аренда кемпера</a>
                    <a href="#">Оплата</a>
                </div>
                <div>
                    <h4>Информация</h4>
                    <a href="#">Условия аренды</a>
                    <a href="#">Часто задаваемые вопросы</a>
                </div>
            </div>
            <Contacts lightTheme/>
        </div>
    </div>
);

export default Footer;
