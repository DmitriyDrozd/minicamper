import Button from '@mui/material/Button';
import React, { FC } from 'react';
import {
    DAILY_PRICE,
    DAILY_PRICE_DISCOUNT,
    KM_PRICE,
    MAX_DISTANCE,
    MIN_DRIVING_EXPERIENCE,
    MIN_TERM,
    PLEDGE,
    SERVICE_FEE
} from '../../constants/price';
import { ROUTE } from '../../constants/routes';
import { CheckIcon } from '../../icons/Check';
import { ButtonStyle } from '../../style/styledButton';
import { isMobile } from '../../utils/device';
import styles from './Terms.module.sass';

const terms = [
    {
        title: <div><span className={styles.Attentive}>Стаж вождения</span> от {MIN_DRIVING_EXPERIENCE} лет</div>,
    },
    {
        title: <div><span className={styles.Attentive}>Сервисный сбор</span> {SERVICE_FEE} руб.</div>,
        description: 'Является невозвратным. В сервисный сбор входит: заправка газа или сменные баллоны, дизельное топливо, питьевая вода 30 литров, зарядка аккумулятора, мойка кемпера.',
    },
    {
        title: <div><span className={styles.Attentive}>Залог</span> {PLEDGE} руб.</div>,
        description: 'Возвращается при сдаче кемпера без происшествий.',
    },
    {
        title: <div><span className={styles.Attentive}>Сдача в аренду осуществляется</span> от {MIN_TERM} суток.</div>,
    },
    {
        title: <div><span className={styles.Attentive}>Доставка</span> по Минску и в пределах {MAX_DISTANCE} км от
            Минска 1 км = {KM_PRICE} руб.</div>,
    },
];

interface TermsProps {
}

const Terms: FC<TermsProps> = () => {
    const onClick = () => window.document.querySelector('body')?.scrollTo({top: 0, behavior: 'smooth'});

    return (
        <section id={ROUTE.terms} className={styles.Terms}>
            <div className={styles.Info}>
                <h2 className={styles.Title}>Условия аренды кемпера</h2>
                <div className={styles.TermsList}>{terms.map(({title, description}, index) => (
                    <div className={styles.Term} key={index}>
                        <div className={styles.TermTitle}><CheckIcon/>{title}</div>
                        {description && <div className={styles.TermDescription}>{description}</div>}
                    </div>
                ))}</div>
                <div className={styles.Prices}>
                    <div className={styles.PriceItem}>
                        <div className={styles.Price}><span className={styles.DiscountOld}>{DAILY_PRICE}</span> <span
                            className={styles.DiscountNew}>{DAILY_PRICE_DISCOUNT}</span> руб./сутки
                        </div>
                        Менее {MIN_TERM}-х суток оговаривается отдельно
                    </div>
                    <div className={styles.PriceItem}>
                        <Button variant="contained" onClick={onClick} sx={ButtonStyle} className={styles.Action}>Узнать
                            о наличии</Button>
                    </div>
                </div>
            </div>
            {!isMobile() && (
                <div className={styles.Picture}>
                    <img loading="lazy" src="terms-picture.jpg" alt="песик в кемпере"/>
                </div>
            )}
        </section>
    );
};

export default Terms;
