import Error from 'next/error';
import { NextPageContext } from 'next-server/dist/lib/utils';

class ErrorPage extends Error {
  static async getInitialProps(ctx: NextPageContext) {
    const parentProps = await Error.getInitialProps(ctx);
    return {
      ...parentProps,
      namespacesRequired: ['common'],
    };
  }
}

export default ErrorPage;
