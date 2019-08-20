// @flow
import styled from 'styled-components';

import { getEnv } from 'helpers/misc';

const staticRoot = getEnv('STATIC_ROOT');

const bg = `${staticRoot}/img/bg.svg`;
const banner = `${staticRoot}/img/banner.png`;

export const Cont = styled.div`
  width: 100%;
  height: 630px;
  background: url(${banner}) left top no-repeat, url(${bg}) right top no-repeat;
  background-size: auto 100%;
`;
