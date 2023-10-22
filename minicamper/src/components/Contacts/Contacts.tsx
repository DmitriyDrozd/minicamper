import classNames from 'classnames';
import React, { FC } from 'react';
import {
    ADDRESS,
    EMAIL,
    PHONE,
    PHONE_RAW
} from '../../constants/contacts';
import { InstagramIcon } from '../../icons/Instagram';
import { LocationIcon } from '../../icons/Location';
import { MailIcon } from '../../icons/Mail';
import { PhoneIcon } from '../../icons/Phone';
// import { TelegramIcon } from '../../icons/Telegram';
import { ViberIcon } from '../../icons/Viber';
import styles from './Contacts.module.sass';

interface ContactsProps {
    lightTheme?: boolean;
    UNP?: string;
    showMessengers?: boolean;
}

const Contacts: FC<ContactsProps> = ({lightTheme = false, UNP, showMessengers = false}) => (
    <div className={classNames(styles.Contacts, {[styles.ContactsLight]: lightTheme})}>
        <div className={styles.Address}>
            <div className={styles.AddressItem}>
                <LocationIcon/>{ADDRESS}
            </div>
            <div className={styles.AddressItem}>
                <PhoneIcon/>{PHONE}
            </div>
            <div className={styles.AddressItem}>
                <MailIcon/>{EMAIL}
            </div>
            {UNP && <div>УНП {UNP}</div>}
        </div>
        {showMessengers && (
            <div className={styles.Messengers}>
                {/*<a href="#"><TelegramIcon /></a>*/}
                <a target='_blank' rel="noreferrer" href="https://instagram.com/camper_arenda_by?utm_source=qr&igshid=YzU1NGVlODEzOA=="><InstagramIcon /></a>
                <a href={`viber://chat?number=%2B${PHONE_RAW}`}><ViberIcon /></a>
            </div>
        )}
    </div>
);
// todo: спросить нужно ли телеграм ссылка

export default Contacts;
