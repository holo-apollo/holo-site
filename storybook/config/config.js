import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import GlobalStyle from 'common/GlobalStyle';
import theme from 'common/theme';

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
  <div style={{ padding: '20px' }}>
    <link
      href="https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700&display=swap&subset=cyrillic"
      rel="stylesheet"
    />
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      {story()}
    </MuiThemeProvider>
  </div>
);

addDecorator(themeDecorator);
addDecorator(withKnobs);

configure(loadStories, module);
