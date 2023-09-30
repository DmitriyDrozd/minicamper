import React, { FC } from 'react';
import styles from './Quote.module.sass';

interface QuoteProps {
}

const Quote: FC<QuoteProps> = () => (
    <div className={styles.QuoteWrapper}>
        <div className={styles.Quote}>
            <div className={styles.Rotated}>Посмотри на мир!</div>
            <span className={styles.Straight}>он куда удивительнее снов.</span>
            <span className={styles.Author}>-Рэй Брэдберри</span>
        </div>
    </div>
);

export default Quote;
