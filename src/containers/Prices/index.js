// @flow
import React from 'react';

import Layout, { Section } from 'containers/Layout';

const Prices = () => {
  return (
    <Layout>
      <Section>Prices for our services</Section>
    </Layout>
  );
};

Prices.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Prices;
