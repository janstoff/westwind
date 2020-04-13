import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import styles from './motivationTeaser.module.scss';
import ModuleLayout from '../layout/ModuleLayout';

const Motivation: React.FunctionComponent = () => (
  <ModuleLayout id="motivation-teaser">
    <h1>
      <Translated id="motivation-headline" />
    </h1>
    <p className={styles.body}>
      <Translated id="motivation-subheadline" />
    </p>
  </ModuleLayout>
);

export default Motivation;
