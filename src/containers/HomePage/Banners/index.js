// @flow
import React from 'react';

import { getEnv } from 'helpers/misc';
import Banner from './Banner';

const staticRoot = getEnv('STATIC_ROOT');

const bg = `${staticRoot}/img/bg.svg`;
const banner = `${staticRoot}/img/banner.png`;

const Banners = () => {
  return <Banner bgUrl={bg} bannerUrl={banner} />;
};

export default Banners;
