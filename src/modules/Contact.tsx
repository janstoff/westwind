import React from 'react';
import {FormattedMessage as Translated, useIntl} from 'react-intl';

import styles from './contact.module.scss';
import PrimaryButton from '../components/PrimaryButton';
import ModuleLayout from '../layout/ModuleLayout';
import {CONTACT_EMAIL_ADDRESS} from '../config';

const Contact: React.FunctionComponent = () => {
  const {formatMessage} = useIntl();

  return (
    <ModuleLayout id="contact">
      <form
        action={`https://formspree.io/${CONTACT_EMAIL_ADDRESS}`}
        method="POST"
      >
        <h1 style={{left: '0'}}>
          <Translated id="contact-headline" />
        </h1>
        <div>
          <div className={styles.formGroup}>
            <input name="name" required placeholder="name" />
            <label htmlFor="name">name</label>
          </div>
          <div className={styles.formGroup}>
            <input type="email" name="email" required placeholder="email" />
            <label htmlFor="email">email</label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="message"
            required
            placeholder={formatMessage({id: 'message-label'})}
          />
          <label htmlFor="message">
            <Translated id="message-label" />
          </label>
        </div>
        <div className={styles.formGroup}>
          <PrimaryButton type="submit">
            <Translated id="send-button-text" />
          </PrimaryButton>
        </div>
      </form>
    </ModuleLayout>
  );
};

export default Contact;
