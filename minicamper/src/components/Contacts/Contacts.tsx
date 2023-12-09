import classNames from 'classnames';
import React, { FC } from 'react';
import { InstagramIcon } from '../../icons/Instagram';
import { LocationIcon } from '../../icons/Location';
import { MailIcon } from '../../icons/Mail';
import { PhoneIcon } from '../../icons/Phone';
import { ViberIcon } from '../../icons/Viber';
import { useApplicationContext } from '../../store/applicationContext';
import styles from './Contacts.module.sass';

interface ContactsProps {
    lightTheme?: boolean;
    UNP?: string;
    showMessengers?: boolean;
    handleCenterMap?: () => void;
}

const Contacts: FC<ContactsProps> = ({lightTheme = false, UNP, showMessengers = false, handleCenterMap = () => {}}) => {
    const { contacts: { address, addressCoordinates, phoneRaw, phone, email, instagramAccount } } = useApplicationContext();
    const [lat, lon] = addressCoordinates;

    return (
        <div className={classNames(styles.Contacts, {[styles.ContactsLight]: lightTheme})}>
            <div className={styles.Address}>
                <div className={styles.AddressItem} onClick={handleCenterMap}>
                    <LocationIcon/><a target='_blank' rel="noreferrer" href={`https://yandex.ru/maps/?pt=${lon},${lat}&z=18&l=map`}>{address}</a>
                </div>
                <div className={styles.AddressItem}>
                    <PhoneIcon/><a href={`tel:+${phoneRaw}`}>{phone}</a>
                </div>
                <div className={styles.AddressItem}>
                    <MailIcon/><a href={`mailto:${email}`}>{email}</a>
                </div>
                {UNP && <div>УНП {UNP}</div>}
            </div>
            {showMessengers && (
                <div className={styles.Messengers}>
                    <a target='_blank' rel="noreferrer" href={`https://instagram.com/${instagramAccount}`}><InstagramIcon /></a>
                    <a href={`viber://chat?number=%2B${phoneRaw}`}><ViberIcon /></a>
                </div>
            )}
        </div>
    );
}

export default Contacts;
