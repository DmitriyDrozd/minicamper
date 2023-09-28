import React, { FC } from 'react';
import FormCallBack, { TFormCallBackSubmit } from '../FormCallBack/FormCallBack';
import styles from './Callback.module.sass';

interface CallbackProps {
    onSubmit: (attributes: TFormCallBackSubmit) => void;
}

const Callback: FC<CallbackProps> = ({ onSubmit }) => {
    return (
        <div className={styles.Callback}>
            <div className={styles.PictureWrapper}>
                <img className={styles.Picture} src="call.jpg" alt="телефон в руке"/>
            </div>
            <FormCallBack onSubmit={onSubmit}/>
        </div>
    );
}

export default Callback;
