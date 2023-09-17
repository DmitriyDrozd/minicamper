import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import styles from './PageWrapper.module.sass';

interface PageWrapperProps {
    children: string | JSX.Element | JSX.Element[]
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => (
  <div className={styles.PageWrapper}>
      <Header/>
      <div className={styles.PageContent}>
          {children}
      </div>
  </div>
);

export default PageWrapper;
