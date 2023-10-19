import React, { FC } from 'react';
import { isMobile } from '../../utils/device';
import FormCallBack, { TFormCallBackSubmit } from '../FormCallBack/FormCallBack';
import styles from './Callback.module.sass';
import ContentWrapper from '../../layout/ContentWrapper/ContentWrapper';

interface CallbackProps {
    onSubmit: (attributes: TFormCallBackSubmit) => void;
}

const Callback: FC<CallbackProps> = ({ onSubmit }) => {
    return (
        <div className={styles.Callback}>
            <ContentWrapper>
                <div className={styles.CallbackContent}>
                    {!isMobile() && (
                        <div className={styles.PictureWrapper}>
                            <img className={styles.Picture} src="call.jpg" alt="телефон в руке"/>
                        </div>
                    )}
                    <div className={styles.FormWrapper}>
                        <h2>Вам перезвонить?</h2>
                        <span className={styles.Questions}>Если у вас есть вопросы или вы ещё сомневаетесь, заполните форму и мы позвоним, чтобы ответить на все ваши вопросы</span>
                        <FormCallBack onSubmit={onSubmit}/>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
}

export default Callback;
