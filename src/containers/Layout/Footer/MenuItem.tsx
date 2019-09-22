import React, { FunctionComponent } from 'react';
import { Link } from 'common/i18n';

import { MenuItemCont } from './styled';

type Props = {
  link: string;
};

const MenuItem: FunctionComponent<Props> = ({ link, children }) => (
  <li>
    <Link href={link}>
      <a>
        <MenuItemCont>{children}</MenuItemCont>
      </a>
    </Link>
  </li>
);

export default MenuItem;
