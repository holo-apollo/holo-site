// @flow
import React from 'react';

import Layout from 'containers/Layout';
import { withTranslation } from 'common/i18n';

type Props = {
  t: Function,
};

const Application = ({ t }: Props) => {
  return <Layout>{t('applicationPage')}</Layout>;
};

Application.getInitialProps = async () => ({
  namespacesRequired: ['common', 'application'],
});

export default withTranslation('application')(Application);
