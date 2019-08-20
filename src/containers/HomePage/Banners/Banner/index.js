// @flow
import React from 'react';

import { Cont } from './styled';

type Props = {
  bgUrl: string,
  bannerUrl: string,
  // mainText: string,
  // subText: string,
};

const Banner = ({ bgUrl, bannerUrl }: Props) => (
  <Cont bgUrl={bgUrl} bannerUrl={bannerUrl} />
);

export default Banner;
