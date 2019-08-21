// @flow
import React from 'react';

import Layout, { Section } from 'containers/Layout';
import BlockOne from './BlockOne';
import Banners from './Banners';
import Gallery from './Gallery';

const HomePage = () => (
  <Layout>
    <Section fullWidth={true}>
      <Banners />
    </Section>
    <Section>
      <BlockOne />
    </Section>
    <Section fullWidth={true}>
      <Gallery />
    </Section>
  </Layout>
);

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'home', 'advice_form'],
});

export default HomePage;
