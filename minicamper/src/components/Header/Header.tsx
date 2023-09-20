import React, { FC } from 'react';
import { ROUTE } from '../../constants/routes';
import Navigation from '../Navigation/Navigation';
import { TNavLink } from '../Navigation/NavigationLink/NavigationLink';
import styles from './Header.module.sass';

interface HeaderProps {}

const navLinks: TNavLink[] = [
    { title: 'Аренда', url: ROUTE.rent },
    { title: 'Условия аренды', url: ROUTE.conditions },
    { title: 'Правила аренды', url: ROUTE.rules },
    { title: 'Галерея', url: ROUTE.gallery },
    { title: 'Контакты', url: ROUTE.contacts }
]

const Header: FC<HeaderProps> = () => (
  <header className={styles.Header}>
    <img className={styles.Logo} src="logo.png" alt="логотип" />
    <Navigation links={navLinks}/>
    <div>+375 (44) 700-76-55</div>
  </header>
);

export default Header;
