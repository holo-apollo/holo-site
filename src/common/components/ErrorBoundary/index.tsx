import React, { PureComponent} from 'react';
import * as Sentry from '@sentry/browser';

import { getEnv } from 'helpers/misc';

const sentryConfigured = !!getEnv('SENTRY_DSN');

type State = {
  error: Error | null;
};

class ErrorBoundary extends PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: Record<string, any>) {
    if (sentryConfigured) {
      Sentry.withScope(scope => {
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo[key]);
        });
        Sentry.captureException(error);
      });
    }
  }

  render() {
    if (this.state.error) {
      // render fallback UI
      return (
        <>
          <h1>Something went wrong</h1>
          {sentryConfigured && (
            <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
          )}
        </>
      );
    } else {
      // when there's not an error, render children untouched
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
