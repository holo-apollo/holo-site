// @flow
import React from 'react';

import { withTranslation, Link } from 'common/i18n';
import { getGoodsLink, getGoodPageLink } from 'helpers/urls';
import Layout from 'containers/Layout';

type Props = {
  t: Function,
};

const GoodsPage = ({ t }: Props) => (
  <Layout crumbs={[{ message: t('goods'), link: getGoodsLink() }]}>
    {[1, 2, 3, 4, 5].map(goodId => (
      <div key={goodId}>
        <Link href={getGoodPageLink(goodId)}>
          <a>{t('good', { goodId })}</a>
        </Link>
      </div>
    ))}
  </Layout>
);

GoodsPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'goods'],
});

export default withTranslation('goods')(GoodsPage);
