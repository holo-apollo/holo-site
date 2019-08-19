// @flow
const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'uk',
  otherLanguages: ['ru', 'en'],
  localeSubpaths: 'foreign',
  browserLanguageDetection: false,
  serverLanguageDetection: false,
});

// deconstruct for clarity
const { appWithTranslation, useTranslation, Link, i18n } = NextI18NextInstance;

module.exports = {
  default: NextI18NextInstance,
  appWithTranslation,
  useTranslation,
  Link,
  i18n,
};
