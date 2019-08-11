// @flow
import React from 'react';

import Layout from 'containers/Layout';
import { withTranslation } from 'common/i18n';

type Props = {
  t: Function,
};

const HomePage = ({ t }: Props) => {
  return <Layout>{t('welcome')}</Layout>;
};

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'home'],
});

export default withTranslation('home')(HomePage);
