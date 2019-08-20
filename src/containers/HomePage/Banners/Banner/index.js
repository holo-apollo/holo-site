// @flow
import React from 'react';

import { Cont, TextCont, HeaderTextCont, SubTextCont } from './styled';

type Props = {
  bgUrl: string,
  bannerUrl: string,
  mainText: string,
  subText: string,
};

const Banner = ({ bgUrl, bannerUrl, mainText, subText }: Props) => (
  <Cont bgUrl={bgUrl} bannerUrl={bannerUrl}>
    <TextCont>
      <HeaderTextCont>{mainText}</HeaderTextCont>
      <SubTextCont>{subText}</SubTextCont>
    </TextCont>
  </Cont>
);

export default Banner;
