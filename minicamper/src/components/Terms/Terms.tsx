import React, { FC } from 'react';
import {
    DAILY_PRICE,
    KM_PRICE,
    MAX_DISTANCE,
    MIN_DRIVING_EXPERIENCE,
    MIN_TERM,
    PLEDGE,
    SERVICE_FEE
} from '../../constants/price';
import styles from './Terms.module.sass';

const terms = [
    {
        title: <div><span className={styles.Attentive}>Стаж вождения</span> от {MIN_DRIVING_EXPERIENCE} лет</div>,
    },
    {
        title: <div><span className={styles.Attentive}>Сервисный сбор</span>{SERVICE_FEE} руб.</div>,
        description: 'В свервисный сбор входит: уборка, мойка кемпера внутри и снаружи, заправка питьевой воды, заправка газа, заряд аккумулятора.',
    },
    {
        title: <div><span className={styles.Attentive}>Залог</span>{PLEDGE} руб.</div>,
        description: 'Возвращается при сдаче кемпера без происшествий.',
    },
    {
        title: <div><span className={styles.Attentive}>Сдача в аренду осуществляется</span> от {MIN_TERM} суток.</div>,
    },
    {
        title: <div>Заключение <span className={styles.Attentive}>договора</span> аренды.</div>,
    },
];

interface TermsProps {
}

const Terms: FC<TermsProps> = () => (
    <section className={styles.Terms}>
        <div className={styles.Info}>
            <h2 className={styles.Title}>Условия аренды кемпера</h2>
            <div className={styles.TermsList}>{terms.map(({title, description}) => (
                <div className={styles.Term}>
                    {title}
                    <div>{description}</div>
                </div>
            ))}</div>
            <div className={styles.Prices}>
                <div className={styles.PriceItem}>
                    <div className={styles.Price}>{DAILY_PRICE} руб./сутки</div>
                    от {MIN_TERM} суток и более
                </div>
                <div className={styles.PriceItem}>
                    <div className={styles.Price}>1 км = {KM_PRICE} руб.</div>
                    Доставка по Минску и в пределах {MAX_DISTANCE} км от Минска
                </div>
            </div>
        </div>
        <div className={styles.Picture}>
            <img src='terms-picture.png' alt='песик в кемпере' />
        </div>
    </section>
);

export default Terms;
