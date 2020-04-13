import React from 'react';
import styles from './languageSelect.module.scss';
import locales from '../config/locales';
import {Link} from 'gatsby';

interface LanguageSwitchProps {
  readonly locale: string;
  readonly path: string;
}

const LanguageSwitch: React.SFC<LanguageSwitchProps> = ({
  locale,
  path
}: LanguageSwitchProps) => {
  const languageOptions = Object.keys(locales);
  const unlocalizedPath =
    path && path.startsWith('/en/') ? path.replace('/en/', '/') : path;

  return (
    <div className={styles.languageSwitchContainer}>
      {languageOptions.map(language => (
        <Link
          key={language}
          className={
            language === locale ? styles.switchBtnActive : styles.switchBtn
          }
          style={{textDecoration: 'none'}}
          to={language === 'de' ? unlocalizedPath : `/en${unlocalizedPath}`}
        >
          {language}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitch;
