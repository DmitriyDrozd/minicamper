import React, { FC } from 'react';
import styles from './FAQ.module.sass';

interface FaqProps {}

const Faq: FC<FaqProps> = () => (
  <div className={styles.Faq}>
    Faq Component
  </div>
);

export default Faq;
