import React, { FC } from 'react';
import styles from './Terms.module.sass';

interface TermsProps {}

const Terms: FC<TermsProps> = () => (
  <div className={styles.Terms}>
    Terms Component
  </div>
);

export default Terms;
