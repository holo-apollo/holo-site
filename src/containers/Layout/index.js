// @flow
import React, { type Node } from 'react';

import Header from './Header';
import { HeaderCont, MainCont, ContentCont, ChildrenCont } from './styled';

type Props = {
  children: Node,
};

const Layout = ({ children }: Props) => (
  <>
    <HeaderCont>
      <Header />
    </HeaderCont>
    <MainCont>
      <ContentCont>
        <ChildrenCont>{children}</ChildrenCont>
      </ContentCont>
    </MainCont>
  </>
);

export default Layout;
