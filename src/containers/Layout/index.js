// @flow
import React, { type Node } from 'react';

import Header from './Header';
import Footer from './Footer';
import { HeaderCont, ContentCont } from './styled';

export { Section } from './styled';

type Props = {
  children: Node,
};

const Layout = ({ children }: Props) => (
  <>
    <HeaderCont>
      <Header />
    </HeaderCont>
    <ContentCont>{children}</ContentCont>
    <Footer />
  </>
);

export default Layout;
