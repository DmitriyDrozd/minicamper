import React, { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './PageWrapper.module.sass';

interface PageWrapperProps {
    children: string | JSX.Element | JSX.Element[]
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => (
  <div className={styles.PageWrapper}>
      {children}
  </div>
);

export default PageWrapper;
