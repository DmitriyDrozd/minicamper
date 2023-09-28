import React, { FC } from 'react';
import {
    ADDRESS,
    EMAIL,
    PHONE
} from '../../constants/contacts';
import Contacts from '../Contacts/Contacts';
import Map from '../Map/Map';
import styles from './StayInTouch.module.sass';

interface StayInTouchProps {
}

const StayInTouch: FC<StayInTouchProps> = () => (
    <div className={styles.StayInTouch}>
        <div>
            <h2>Мы всегда на связи</h2>
            <Contacts />
        </div>
        <div><Map /></div>
    </div>
);

export default StayInTouch;
