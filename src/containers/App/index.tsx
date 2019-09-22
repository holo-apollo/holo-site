import NextApp, { Container, AppContext } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as Sentry from '@sentry/browser';

import GlobalStyle from 'common/GlobalStyle';
import { isServer, getEnv } from 'helpers/misc';
import HelmetComponent from 'common/components/HelmetComponent';
import ErrorBoundary from 'common/components/ErrorBoundary';
import { appWithTranslation } from 'common/i18n';
import theme from 'common/theme';

class NotEnhancedApp extends NextApp {
  constructor(props: any) {
    super(props);
    if (!isServer && getEnv('SENTRY_DSN')) {
      Sentry.init({
        dsn: (window as any).env.SENTRY_DSN,
      });
    }
  }

  static async getInitialProps({ Component, ctx }: AppContext) {
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
          <ThemeProvider theme={theme}>
            <>
              <CssBaseline />
              <GlobalStyle />
              <HelmetComponent />
              <Component {...pageProps} />
            </>
          </ThemeProvider>
        </ErrorBoundary>
      </Container>
    );
  }
}

const App = appWithTranslation(NotEnhancedApp);

export default App;
