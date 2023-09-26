import React, { FC } from 'react';
import styles from './Quote.module.sass';

interface QuoteProps {}

const Quote: FC<QuoteProps> = () => (
  <div className={styles.Quote}>
      <div>Посмотри на мир!</div>
      <div>он куда удивительнее снов.</div>
      <div>-Рэй Брэдберри</div>
  </div>
);

export default Quote;
