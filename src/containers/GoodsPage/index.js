// @flow
import React from 'react';
import Link from 'next/link';

import { getGoodsLink, getGoodPageLink } from 'helpers/urls';
import Layout from 'containers/Layout';

const GoodsPage = () => (
  <Layout crumbs={[{ message: 'Goods', link: getGoodsLink() }]}>
    {[1, 2, 3, 4, 5].map(goodId => (
      <div key={goodId}>
        <Link href={getGoodPageLink(goodId)}>
          <a>Good {goodId}</a>
        </Link>
      </div>
    ))}
  </Layout>
);

export default GoodsPage;
