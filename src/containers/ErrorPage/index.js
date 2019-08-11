import Error from 'next/error';

class ErrorPage extends Error {
  static async getInitialProps(ctx) {
    const parentProps = await Error.getInitialProps(ctx);
    return {
      ...parentProps,
      namespacesRequired: ['common'],
    };
  }
}

export default ErrorPage;
