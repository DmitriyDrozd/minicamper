import React, { FC } from 'react';
import styles from './StayInTouch.module.sass';

interface StayInTouchProps {}

const StayInTouch: FC<StayInTouchProps> = () => (
  <div className={styles.StayInTouch}>
    StayInTouch Component
  </div>
);

export default StayInTouch;
