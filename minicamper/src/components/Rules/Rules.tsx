import React, { FC } from 'react';
import styles from './Rules.module.sass';

interface RulesProps {}

const Rules: FC<RulesProps> = () => (
  <div className={styles.Rules}>
    Rules Component
  </div>
);

export default Rules;
