import React, { FunctionComponent } from 'react';

import Header from './Header';
import Footer from './Footer';
import { HeaderCont, ContentCont } from './styled';

export { Section } from './styled';

const Layout: FunctionComponent<{}> = ({ children }) => (
  <>
    <HeaderCont>
      <Header />
    </HeaderCont>
    <ContentCont>{children}</ContentCont>
    <Footer />
  </>
);

export default Layout;
