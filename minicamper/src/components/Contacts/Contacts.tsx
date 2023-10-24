import classNames from 'classnames';
import React, { FC } from 'react';
import {
    ADDRESS,
    ADDRESS_COORDINATES,
    EMAIL,
    PHONE,
    PHONE_RAW
} from '../../constants/contacts';
import { InstagramIcon } from '../../icons/Instagram';
import { LocationIcon } from '../../icons/Location';
import { MailIcon } from '../../icons/Mail';
import { PhoneIcon } from '../../icons/Phone';
import { ViberIcon } from '../../icons/Viber';
import styles from './Contacts.module.sass';
// import { TelegramIcon } from '../../icons/Telegram';

interface ContactsProps {
    lightTheme?: boolean;
    UNP?: string;
    showMessengers?: boolean;
    handleCenterMap?: () => void;
}

const Contacts: FC<ContactsProps> = ({lightTheme = false, UNP, showMessengers = false, handleCenterMap = () => {}}) => {
    const lat = ADDRESS_COORDINATES[0];
    const lon = ADDRESS_COORDINATES[1];

    return (
        <div className={classNames(styles.Contacts, {[styles.ContactsLight]: lightTheme})}>
            <div className={styles.Address}>
                <div className={styles.AddressItem} onClick={handleCenterMap}>
                    <LocationIcon/><a target='_blank' rel="noreferrer" href={`https://yandex.ru/maps/?pt=${lon},${lat}&z=18&l=map`}>{ADDRESS}</a>
                </div>
                <div className={styles.AddressItem}>
                    <PhoneIcon/><a href={`tel:+${PHONE_RAW}`}>{PHONE}</a>
                </div>
                <div className={styles.AddressItem}>
                    <MailIcon/><a href={`mailto:${EMAIL}`}>{EMAIL}</a>
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
}
// todo: спросить нужно ли телеграм ссылка

export default Contacts;
