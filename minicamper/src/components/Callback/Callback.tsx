import React, { FC } from 'react';
import styles from './Callback.module.sass';

interface CallbackProps {
}

const Callback: FC<CallbackProps> = () => (
    <div className={styles.Callback}>
        <div className={styles.PictureWrapper}>
            <img className={styles.Picture} src="call.jpg" alt="телефон в руке"/>
        </div>
    </div>
);

export default Callback;
