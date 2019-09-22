import React, { FunctionComponent } from 'react';
import { Link } from 'common/i18n';

import { MenuItemCont } from './styled';

type Props = {
  link: string;
  isActive: boolean;
};

const MenuItem: FunctionComponent<Props> = ({ link, isActive, children }) => (
  <li>
    <Link href={link}>
      <a>
        <MenuItemCont isActive={isActive}>{children}</MenuItemCont>
      </a>
    </Link>
  </li>
);

MenuItem.defaultProps = {
  isActive: false,
};

export default MenuItem;
