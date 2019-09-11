// @flow
import React, { type Node } from 'react';
import { Link } from 'common/i18n';

import { MenuItemCont } from './styled';

type Props = {
  link: string,
  children: Node,
};

const MenuItem = ({ link, children }: Props) => (
  <li>
    <Link href={link}>
      <a>
        <MenuItemCont>{children}</MenuItemCont>
      </a>
    </Link>
  </li>
);

export default MenuItem;
