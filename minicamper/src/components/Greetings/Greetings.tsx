import React, { FC } from 'react';
import styles from './Greetings.module.sass';

interface GreetingsProps {}

const Greetings: FC<GreetingsProps> = () => (
  <div className={styles.Greetings}>
    Greetings Component
  </div>
);

export default Greetings;
