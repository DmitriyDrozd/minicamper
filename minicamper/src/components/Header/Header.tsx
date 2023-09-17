import React, { FC } from 'react';
import styles from './Header.module.sass';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header}>
    <header>minicamper</header>
  </div>
);

export default Header;
