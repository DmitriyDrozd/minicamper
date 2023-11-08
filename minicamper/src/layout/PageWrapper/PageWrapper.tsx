import React, { FC } from 'react';
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
