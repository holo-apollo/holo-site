// @flow
import React, { type Node, type ElementConfig } from 'react';
import { isEmpty } from 'ramda';

import { withTranslation } from 'common/i18n';
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
  t: Function,
};

const Layout = ({ crumbs, children, t }: Props) => (
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
            <SearchField onSearch={() => {}} placeholder={t('search')} />
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

export default withTranslation('common')(Layout);
