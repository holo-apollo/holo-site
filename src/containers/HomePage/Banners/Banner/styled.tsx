import styled, { css } from 'styled-components';

const getContStyles = ({
  bgUrl,
  bannerUrl,
}: {
  bgUrl: string,
  bannerUrl: string,
}) => css`
  background: url(${bannerUrl}) left top no-repeat,
    url(${bgUrl}) right top repeat;
  background-size: auto 100%;
`;

export const Cont = styled.div`
  width: 100%;
  height: 630px;
  max-height: calc(100vh - 70px);
  position: relative;
  ${getContStyles};
`;

export const TextCont = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderTextCont = styled.h2`
  font-weight: bold;
  font-size: 72px;
  line-height: 72px;
  width: 50%;
  margin-bottom: 21px;
`;

export const SubTextCont = styled.p`
  font-size: 14px;
  line-height: 18px;
  width: 50%;
`;
