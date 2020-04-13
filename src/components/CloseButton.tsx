import React from 'react';

import styles from './closeButton.module.scss';

interface CloseButtonProps {
  readonly onClick: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

export function CloseButton({onClick}: CloseButtonProps): JSX.Element {
  return (
    <a className={styles.closeButton} onClick={onClick}>
      <img src={require('../styling/icons/close-button.svg')} alt="close" />
    </a>
  );
}
