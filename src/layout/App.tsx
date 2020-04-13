import React from 'react';
import {Helmet} from 'react-helmet';
import {IntlProvider, FormattedMessage as Translated} from 'react-intl';
import CookieConsent from 'react-cookie-consent';

//Config
import {APP_NAME} from '../config';

// Styling
import styles from './app.module.scss';

// Components
import Footer from './Footer';
import Header from './Header';

// Translations
import en from '../i18n/en.json';
import de from '../i18n/de.json';
import {MessageFormatElement} from 'intl-messageformat-parser/dist/types';

interface Translations {
  readonly [key: string]:
    | Record<string, string>
    | Record<string, MessageFormatElement[]>
    | undefined;
}

const translations: Translations = {en, de};

export type PageStyle = 'home' | 'default';

interface AppProps {
  readonly locale: string;
  readonly pageStyle?: PageStyle;
  readonly path: string;
  readonly children: any;
}

const AppLayout: React.FunctionComponent<AppProps> = ({
  locale,
  pageStyle = 'default',
  path,
  children
}: AppProps) => (
  <IntlProvider
    locale={locale}
    messages={translations[locale]}
    textComponent={React.Fragment}
  >
    <div className={styles.App}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{APP_NAME}</title>
      </Helmet>
      <CookieConsent
        location="bottom"
        buttonText="Ok!"
        cookieName="consent cookie"
        style={{background: '#5f5a5a'}}
        buttonStyle={{
          background: '#f5f5f5',
          color: '#2c2b2b',
          fontSize: '13px',
          borderRadius: '5px'
        }}
        expires={150}
      >
        <Translated id="cookies-main" />
      </CookieConsent>
      <Header locale={locale} pageStyle={pageStyle} path={path} />
      {children}
      <Footer />
    </div>
  </IntlProvider>
);

export default AppLayout;
