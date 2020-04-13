import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';
import LocalizedLink from './LocalizedLink';

export function BackToTopLink(): JSX.Element {
  return (
    <LocalizedLink to="/" style={{textDecoration: 'none', color: 'inherit'}}>
      <Translated id="back-to-top-link" />
    </LocalizedLink>
  );
}
