// @flow
import React from 'react';

import palette from 'common/palette';
import Layout, { Section } from 'containers/Layout';
import Banners from './Banners';
import BlockOne from './BlockOne';
import Gallery from './Gallery';
import BlockTwo from './BlockTwo';
import BlockThree from './BlockThree';
import BlockFour from './BlockFour';
import BlockFive from './BlockFive';

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
    <Section fullWidth={true}>
      <BlockTwo />
    </Section>
    <Section>
      <BlockThree />
    </Section>
    <Section fullWidth={true} background={palette.green}>
      <Section>
        <BlockFour />
      </Section>
    </Section>
    <Section>
      <BlockFive />
    </Section>
  </Layout>
);

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'home', 'advice_form'],
});

export default HomePage;
