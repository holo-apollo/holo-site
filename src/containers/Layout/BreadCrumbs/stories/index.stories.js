// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import BreadCrumbs from '../index';

const crumbs = [
  {
    link: '/goods?category=home_decor',
    message: 'Home decor',
  },
  {
    link: '/goods?category=lighting',
    message: 'Lighting',
  },
  {
    link: 'goods/1',
    message: 'Decorative Edison lamp',
  },
];

storiesOf('Layout', module).add('BreadCrumbs', () => (
  <BreadCrumbs crumbs={crumbs} />
));
