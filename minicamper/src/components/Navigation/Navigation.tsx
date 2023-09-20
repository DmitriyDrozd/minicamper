import React, { FC } from 'react';
import styles from './Navigation.module.sass';
import NavigationLink, { TNavLink } from './NavigationLink/NavigationLink';

interface NavigationProps {
    links: TNavLink[]
}

const Navigation: FC<NavigationProps> = ({ links }) => (
  <div className={styles.Navigation}>
      {links.map(link => <NavigationLink link={link} key={link.title}/>)}
  </div>
);

export default Navigation;
