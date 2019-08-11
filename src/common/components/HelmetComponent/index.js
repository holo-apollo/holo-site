import React from 'react';
import Helmet from 'react-helmet';

import { withTranslation } from 'common/i18n';

const HelmetComponent = ({ t }) => (
  <Helmet
    meta={[
      {
        name: 'description',
        content: t('siteDescription'),
      },
    ]}
  />
);

export default withTranslation('common')(HelmetComponent);
