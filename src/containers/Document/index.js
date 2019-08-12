// @flow
import React from 'react';
import NextDocument, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Helmet from 'react-helmet';

const staticRoot = process.env.STATIC_ROOT || '';

class Document extends NextDocument {
  // $FlowFixMe
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Render app and page and get the context of the page with collected side effects.
      let pageContext;
      const page = ctx.renderPage(Component => {
        const WrappedComponent = props => {
          pageContext = props.pageContext;
          return <Component {...props} />;
        };

        return WrappedComponent;
      });

      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      let css;
      // It might be undefined, e.g. after an error.
      if (pageContext) {
        css = pageContext.sheetsRegistry.toString();
      }

      // see https://github.com/nfl/react-helmet#server-usage for more information
      // 'head' was occupied by 'renderPage().head', we cannot use it
      const helmet = Helmet.renderStatic();

      const locale = ctx.req.language;

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        ...page,
        pageContext,
        locale,
        helmet,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: (
          <React.Fragment>
            <style
              id="jss-server-side"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: css }}
            />
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  // should render on <head>
  get helmetHeadComponents() {
    const notAcceptable = ['htmlAttributes', 'bodyAttributes', 'title'];
    // $FlowFixMe
    return Object.keys(this.props.helmet)
      .filter(el => !notAcceptable.includes(el))
      .map(el => this.props.helmet[el].toComponent());
  }

  render() {
    return (
      <html {...this.helmetHtmlAttrComponents} lang={this.props.locale}>
        <Head>
          {process.env.HOST === 'https://www.holo-apollo.art' && (
            <>
              {/* Global site tag (gtag.js) - Google Analytics */}
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-113883637-1"
              />
              <script src={`${staticRoot}/js/gtm.js`} />
            </>
          )}
          <script src="/env.js" />
          {this.helmetHeadComponents}
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={`${staticRoot}/img/favicon.png`}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700&display=swap&subset=cyrillic"
            rel="stylesheet"
          />
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Document;
