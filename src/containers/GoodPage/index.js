import React from 'react';
import { withRouter } from 'next/router';

import Layout from 'containers/Layout';
import { getGoodsLink, getGoodPageLink } from 'helpers/urls';

const GoodPage = props => (
  <Layout
    crumbs={[
      { message: 'Goods', link: getGoodsLink() },
      {
        message: `Good ${props.router.query.id}`,
        link: getGoodPageLink(props.router.query.id),
      },
    ]}
  >
    Good {props.router.query.id}
  </Layout>
);

export default withRouter(GoodPage);
