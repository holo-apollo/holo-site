// @flow
import React from 'react';
import { compose } from 'ramda';
import { withRouter } from 'next/router';

import { withTranslation } from 'common/i18n';
import Layout from 'containers/Layout';
import { getGoodsLink, getGoodPageLink } from 'helpers/urls';

type Props = {
  t: Function,
  router: {
    query: {
      id: number,
    },
  },
};

const GoodPage = ({ t, router }: Props) => {
  const goodId = router.query.id;
  return (
    <Layout
      crumbs={[
        { message: t('goods'), link: getGoodsLink() },
        {
          message: t('good', { goodId }),
          link: getGoodPageLink(goodId),
        },
      ]}
    >
      {t('good', { goodId })}
    </Layout>
  );
};

GoodPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'goods'],
});

const withIntl = withTranslation('goods');

export default compose(
  withRouter,
  withIntl
)(GoodPage);
