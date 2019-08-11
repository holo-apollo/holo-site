const express = require('express');
const next = require('next');
const { resolve } = require('path');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('../src/common/i18n').default;

const port = parseInt(process.env.PORT, 10) || 3000;
const host = process.env.HOST || 'http://localhost';
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const sentryConfigured = !!process.env.SENTRY_DSN;

const Sentry = require('@sentry/node');
if (sentryConfigured) {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
}

const env = {
  CMS_API_ROOT: process.env.CMS_API_ROOT,
  CRM_API_ROOT: process.env.CRM_API_ROOT,
  STATIC_ROOT: process.env.STATIC_ROOT,
  SENTRY_DSN: process.env.SENTRY_DSN,
};

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(nextI18NextMiddleware(nextI18next));

    // The request handler must be the first middleware on the app
    sentryConfigured && server.use(Sentry.Handlers.requestHandler());

    if (process.env.SERVE_STATIC) {
      const staticDir = resolve(__dirname, `../static`);
      server.use(express.static(staticDir));
    }

    server.get('/env.js', function(req, res) {
      res.set('Content-Type', 'application/javascript');
      res.send('var env = ' + JSON.stringify(env));
    });

    server.get('/goods/:id', function(req, res) {
      app.render(req, res, '/good', {
        id: req.params.id,
      });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    if (sentryConfigured) {
      server.use(Sentry.Handlers.errorHandler());

      // Optional fallthrough error handler
      server.use(function onError(err, req, res) {
        // The error id is attached to `res.sentry` to be returned
        // and optionally displayed to the user for support.
        res.statusCode = 500;
        res.end(res.sentry + '\n');
      });
    }

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on ${host}:${port}`); // eslint-disable-line no-console
    });
  })
  .catch(ex => {
    console.error(ex.stack); // eslint-disable-line no-console
    process.exit(1);
  });
