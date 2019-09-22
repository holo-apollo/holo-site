import React from 'react';
import NextDocument, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet as StyledCompSheet } from 'styled-components';
import { ServerStyleSheets as MaterialSheets } from '@material-ui/styles';
import Helmet, { HelmetData } from 'react-helmet';

const staticRoot = process.env.STATIC_ROOT || '';

type Props = {
  helmet: HelmetData;
  locale: string;
};

class Document extends NextDocument<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const styledCompSheet = new StyledCompSheet();
    const materialSheets = new MaterialSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      // Render app and page and get the context of the page with collected side effects.
      let pageContext;
      const page = ctx.renderPage(Component => {
        const WrappedComponent = (props: any) => {
          pageContext = props.pageContext;
          return <Component {...props} />;
        };

        return WrappedComponent;
      });

      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            materialSheets.collect(
              styledCompSheet.collectStyles(<App {...props} />)
            ),
        });

      // see https://github.com/nfl/react-helmet#server-usage for more information
      // 'head' was occupied by 'renderPage().head', we cannot use it
      const helmet = Helmet.renderStatic();

      const locale = (ctx.req as any).language;

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        ...page,
        pageContext,
        locale,
        helmet,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: (
          <>
            {initialProps.styles}
            {materialSheets.getStyleElement()}
            {styledCompSheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      styledCompSheet.seal();
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
    return Object.keys(this.props.helmet)
      .filter(el => !notAcceptable.includes(el))
      .map(el => (this.props.helmet as any)[el].toComponent());
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
          {/* CSS for react-slick. They a very light so probably no need to worry about including them globally. */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
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
