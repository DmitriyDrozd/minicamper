import React, { FC } from 'react';
import styles from './Footer.module.sass';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer}>
    Footer Component
  </div>
);

export default Footer;
