import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import {PAGES} from '../config';
import styles from './footer.module.scss';
import LocalizedLink from '../components/LocalizedLink';
import CompanyModal from '../components/CompanyModal';
import {CloseButton} from '../components/CloseButton';
import footerLogo from '../styling/logos/westwind-logo-black.svg';

class Footer extends React.Component {
  state = {
    companyModalOpen: false,
  };

  private handleCompanyClick(): void {
    this.setState(() => ({
      companyModalOpen: this.state.companyModalOpen ? false : true,
    }));
    console.log('state', this.state);
  }

  private renderPageLinks(pages: string[]) {
    return (
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <LocalizedLink
              className={styles.link}
              to={`/${page === 'home' ? '' : page}`}
            >
              <Translated id={`${page}-menu-entry`} />
            </LocalizedLink>
          </li>
        ))}
        <li key="company">
          <a className={styles.link} onClick={() => this.handleCompanyClick()}>
            <Translated id={`company-headline`} />
          </a>
        </li>
      </ul>
    );
  }

  public render(): JSX.Element {
    return (
      <footer className={styles.footer}>
        {this.state.companyModalOpen && (
          <div>
            <CloseButton onClick={() => this.handleCompanyClick()} />
            <CompanyModal />
          </div>
        )}
        <div className={styles.main}>
          <div className={styles.logoWrapper}>
            <LocalizedLink to="/">
              <img src={footerLogo} alt="Home" />
            </LocalizedLink>
          </div>
          <div className={styles.navWrapper}>
            <div className={styles.navigation}>
              {this.renderPageLinks(PAGES)}
            </div>
          </div>
        </div>
        <div className={styles.disclaimerWrapper}>
          <div className={styles.disclaimerText}>
            <Translated id="footer-copyright" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
