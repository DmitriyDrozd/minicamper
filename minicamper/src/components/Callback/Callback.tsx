import React, { FC } from 'react';
import styles from './Callback.module.sass';

interface CallbackProps {}

const Callback: FC<CallbackProps> = () => (
  <div className={styles.Callback}>
    Callback Component
  </div>
);

export default Callback;
