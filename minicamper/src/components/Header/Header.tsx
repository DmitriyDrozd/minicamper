import React, { FC } from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.sass';

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => (
    <header className={styles.Header}>
        <Navigation/>
    </header>
);

export default Header;
