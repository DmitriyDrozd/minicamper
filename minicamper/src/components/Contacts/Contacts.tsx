import classNames from 'classnames';
import React, { FC } from 'react';
import {
    ADDRESS,
    EMAIL,
    PHONE
} from '../../constants/contacts';
import styles from './Contacts.module.sass';

interface ContactsProps {
    lightTheme?: boolean;
}

const Contacts: FC<ContactsProps> = ({ lightTheme = false }) => (
  <div className={classNames(styles.Contacts, { [styles.ContactsLight]: lightTheme })}>
      <div>
          <></>
          {ADDRESS}
      </div>
      <div>
          <></>
          {PHONE}
      </div>
      <div>
          <></>
          {EMAIL}
      </div>
  </div>
);

export default Contacts;
