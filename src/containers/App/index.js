// @flow
import NextApp, { Container } from 'next/app';
import Head from 'next/head';
import React, { Fragment } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import * as Sentry from '@sentry/browser';

import GlobalStyle from 'common/GlobalStyle';
import getPageContext from 'helpers/getPageContext';
import { isServer } from 'helpers/misc';
import HelmetComponent from 'common/components/HelmetComponent';
import ErrorBoundary from 'common/components/ErrorBoundary';

class App extends NextApp {
  constructor() {
    super();
    this.pageContext = getPageContext();
    if (!isServer && window.env.SENTRY_DSN) {
      Sentry.init({
        dsn: window.env.SENTRY_DSN,
      });
    }
  }

  // $FlowFixMe
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Holo Apollo Art</title>
        </Head>
        <ErrorBoundary>
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              <Fragment>
                <CssBaseline />
                <GlobalStyle />
                <HelmetComponent />
                <Component pageContext={this.pageContext} {...pageProps} />
              </Fragment>
            </MuiThemeProvider>
          </JssProvider>
        </ErrorBoundary>
      </Container>
    );
  }
}

export default App;
