// @flow
import React, { type Node, type ElementConfig } from 'react';
import { isEmpty } from 'ramda';

import SearchField from 'common/components/inputs/SearchField';
import Header from './Header';
import BreadCrumbs from './BreadCrumbs';
import {
  HeaderCont,
  BelowHeaderContent,
  SearchCont,
  MainCont,
  ContentCont,
  ChildrenCont,
} from './styled';

type BreadCrumbsProps = ElementConfig<typeof BreadCrumbs>;

type Props = {
  ...$Exact<BreadCrumbsProps>,
  children: Node,
};

const Layout = ({ crumbs, children }: Props) => (
  <>
    <HeaderCont>
      <Header />
    </HeaderCont>
    <MainCont>
      <ContentCont>
        <BelowHeaderContent>
          {!isEmpty(crumbs) && <BreadCrumbs crumbs={crumbs} />}
          <span />
          <SearchCont>
            <SearchField onSearch={() => {}} placeholder="Search" />
          </SearchCont>
        </BelowHeaderContent>
        <ChildrenCont>{children}</ChildrenCont>
      </ContentCont>
    </MainCont>
  </>
);

Layout.defaultProps = {
  crumbs: [],
};

export default Layout;
