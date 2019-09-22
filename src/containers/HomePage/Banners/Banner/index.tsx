import React, { FunctionComponent } from 'react';

import { Cont, TextCont, HeaderTextCont, SubTextCont } from './styled';

type Props = {
  bgUrl: string;
  bannerUrl: string;
  mainText: string;
  subText: string;
};

const Banner: FunctionComponent<Props> = ({
  bgUrl,
  bannerUrl,
  mainText,
  subText,
}) => (
  <Cont bgUrl={bgUrl} bannerUrl={bannerUrl}>
    <TextCont>
      <HeaderTextCont>{mainText}</HeaderTextCont>
      <SubTextCont>{subText}</SubTextCont>
    </TextCont>
  </Cont>
);

export default Banner;
