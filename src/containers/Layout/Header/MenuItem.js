// @flow
import React, { type Node } from 'react';
import { Link } from 'common/i18n';

import { MenuItemCont } from './styled';

type Props = {
  link: string,
  isActive: boolean,
  children: Node,
};

const MenuItem = ({ link, isActive, children }: Props) => (
  <Link href={link}>
    <a>
      <MenuItemCont isActive={isActive}>{children}</MenuItemCont>
    </a>
  </Link>
);

MenuItem.defaultProps = {
  isActive: false,
};

export default MenuItem;
