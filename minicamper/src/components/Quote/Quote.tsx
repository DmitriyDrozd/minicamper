import React, { FC } from 'react';
import styles from './Quote.module.sass';

interface QuoteProps {}

const Quote: FC<QuoteProps> = () => (
  <div className={styles.Quote}>
    Quote Component
  </div>
);

export default Quote;
