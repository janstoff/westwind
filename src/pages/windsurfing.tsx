import React from 'react';

import AppLayout from '../layout/App';
import ModuleLayout from '../layout/ModuleLayout';
import {PageProps} from '.';

export default ({pathContext}: PageProps): JSX.Element => {
  const {locale, pagePath} = pathContext;

  console.log('pathContext', pathContext);

  return (
    <AppLayout locale={locale} path={pagePath}>
      <ModuleLayout id="windsurfing">Wind Surfing</ModuleLayout>
    </AppLayout>
  );
};
