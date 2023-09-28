import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './ContentWrapper.module.sass';

interface ContentWrapperProps {
    children: React.ReactElement;
    className?: string;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ className, children }) => (
  <div className={classNames(styles.ContentWrapper, className)}>
      {children}
  </div>
);

export default ContentWrapper;
