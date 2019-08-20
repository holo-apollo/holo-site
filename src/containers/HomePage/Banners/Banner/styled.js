// @flow
import styled, { css } from 'styled-components';

const getContStyles = ({
  bgUrl,
  bannerUrl,
}: {
  bgUrl: string,
  bannerUrl: string,
}) => css`
  background: url(${bannerUrl}) left top no-repeat,
    url(${bgUrl}) right top no-repeat;
  background-size: auto 100%;
`;

export const Cont = styled.div`
  width: 100%;
  height: 630px;
  ${getContStyles};
`;
