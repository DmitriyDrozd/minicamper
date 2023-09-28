import React, { FC } from 'react';
import styles from './ContentWrapper.module.sass';

interface ContentWrapperProps {
    children: React.ReactElement;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => (
  <div className={styles.ContentWrapper}>
      {children}
  </div>
);

export default ContentWrapper;
