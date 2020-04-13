import React, {FunctionComponent} from 'react';

import styles from './header.module.scss';

import LanguageSwitch from '../components/LanguageSelect';
import NavigationMenu from '../components/NavigationMenu';
import SocialLinks from '../components/SocialLinks';
import LocalizedLink from '../components/LocalizedLink';
import {SOCIAL_LINKS} from '../config';

interface HomeLinkProps {
  readonly headerLogo: string;
}

interface HeaderProps {
  readonly locale: string;
  readonly pageStyle: 'default' | 'home';
  readonly path: string;
}

function HomeLink({headerLogo}: HomeLinkProps): JSX.Element {
  return (
    <LocalizedLink className={styles.homeLink} to="/">
      <img src={headerLogo} alt="Home" />
    </LocalizedLink>
  );
}

const Header: FunctionComponent<HeaderProps> = ({
  locale,
  pageStyle,
  path,
}: HeaderProps) => (
  <div className={styles.header}>
    <HomeLink
      headerLogo={
        pageStyle === 'home'
          ? require('../styling/logos/westwind-logo-white.svg')
          : require('../styling/logos/westwind-logo-black.svg')
      }
    />
    <SocialLinks socialLinks={SOCIAL_LINKS} pageStyle={pageStyle} />
    <LanguageSwitch locale={locale} path={path} />
    <NavigationMenu pageStyle={pageStyle} />
  </div>
);

export default Header;
