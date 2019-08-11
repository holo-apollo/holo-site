import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { I18nextProvider } from 'react-i18next';

import GlobalStyle from 'common/GlobalStyle';
import theme from 'common/theme';
import { i18n } from 'common/i18n';

// automatically import all components stories
const componentsReq = require.context(
  '../../src/',
  true,
  /stories\/.*\.stories\.js$/
);

function loadStories() {
  componentsReq.keys().forEach(filename => componentsReq(filename));
}

const themeDecorator = story => (
  <div style={{ padding: '20px', minHeight: '100vh' }}>
    <link
      href="https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700|Montserrat:400,600,700&display=swap&subset=cyrillic"
      rel="stylesheet"
    />
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      {story()}
    </MuiThemeProvider>
  </div>
);

const i18nDecorator = story => (
  <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>
);

addDecorator(themeDecorator);
addDecorator(i18nDecorator);
addDecorator(withKnobs);

configure(loadStories, module);
