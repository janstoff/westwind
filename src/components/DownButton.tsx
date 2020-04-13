import React from 'react';

import styles from './downButton.module.scss';
import LocalizedLink from './LocalizedLink';
import {HOME_SECTIONS} from '../config';

interface DownButtonProps {
  readonly children?: any;
}

const DownButton: React.SFC<DownButtonProps> = ({
  children
}: DownButtonProps) => {
  const firstSection = HOME_SECTIONS[0];

  return (
    <LocalizedLink className={styles.downButton} to={`/#${firstSection}`}>
      {children}
      <img src={require('../styling/icons/down-arrow-white.svg')} alt="down" />
    </LocalizedLink>
  );
};

export default DownButton;
