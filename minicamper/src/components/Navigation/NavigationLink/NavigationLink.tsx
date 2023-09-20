import React, { FC } from 'react';
import styles from './NavigationLink.module.sass';

export type TNavLink = {
    title: string,
    url: string,
};

interface NavigationLinkProps {
    link: TNavLink
}

const NavigationLink: FC<NavigationLinkProps> = ({ link }) => {
    const { title, url } = link;

    return (
        <div className={styles.NavigationLink}>
            <a className={styles.Link} href={url}>{title}</a>
        </div>
    );
}

export default NavigationLink;
