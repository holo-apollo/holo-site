import React from 'react';
import Helmet from 'react-helmet';

import { useTranslation } from 'common/i18n';

const HelmetComponent = () => {
  const { t } = useTranslation('common');
  return (
    <Helmet
      meta={[
        {
          name: 'description',
          content: t('siteDescription'),
        },
      ]}
    />
  );
};

export default HelmetComponent;
