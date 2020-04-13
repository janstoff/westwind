import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import styles from './companyModal.module.scss';

export const CompanyModal = () => (
  <div className={styles.container} id="company">
    <p className={styles.headline}>
      <Translated id={'company'} />
    </p>
    <div className={styles.subHeadline}>
      <Translated id={'company-legal-info-tmg-headline'} />
    </div>
    <Translated id={'company-legal-info-tmg-content'} />
    <div className={styles.subHeadline}>
      <Translated id={'company-legal-info-people-headline'} />
    </div>
    <Translated id={'company-legal-info-people-content'} />
    <div className={styles.subHeadline}>
      <Translated id={'company-legal-info-registered-headline'} />
    </div>
    <Translated id={'company-legal-info-registered-content'} />
    <div className={styles.subHeadline}>
      <Translated id={'company-legal-info-contact-headline'} />
    </div>
    <Translated id={'company-legal-info-contact-content'} />
    <div className={styles.subHeadline}>
      <Translated id={'company-legal-info-eu-legal-action-headline'} />
    </div>
    <Translated id={'company-legal-info-eu-legal-action-content'} />
    <div className={styles.subHeadline}>
      <Translated id={'company-legal-info-imagery-headline'} />
    </div>
    <Translated id={'company-legal-info-imagery-content'} />
  </div>
);

export default CompanyModal;
