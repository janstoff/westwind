import React, {Fragment} from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import styles from './landing.module.scss';
import LocalizedLink from '../components/LocalizedLink';
import DownButton from '../components/DownButton';

interface MainButtonProps {
  readonly children: any;
  readonly to: string;
}

interface MainButtonsContainerProps {
  readonly children: JSX.Element[];
}

const MainButton: React.SFC<MainButtonProps> = ({
  children,
  to,
}: MainButtonProps) => (
  <LocalizedLink className={styles.mainButton} to={to}>
    {children}
  </LocalizedLink>
);

const MainButtonsContainer: React.SFC<MainButtonsContainerProps> = ({
  children,
}) => <div className={styles.mainButtonsContainer}>{children}</div>;

const Landing: React.SFC = () => (
  <>
    <header className={styles.base}>
      <div className={styles.heading}>
        <h1>
          <span className={styles.headingMain}>
            <Translated id="landing-heading-main" />
          </span>
          <span className={styles.headingSub}>
            <Translated id="landing-heading-sub" />
          </span>
        </h1>
        <MainButtonsContainer>
          <MainButton to="/#learn">
            <Translated id="learn-button-text" />
          </MainButton>
          <MainButton to="/#rent">
            <Translated id="rent-button-text" />
          </MainButton>
          <MainButton to="/#shop">
            <Translated id="shop-button-text" />
          </MainButton>
        </MainButtonsContainer>
      </div>
      <DownButton />
    </header>
  </>
);

export default Landing;
