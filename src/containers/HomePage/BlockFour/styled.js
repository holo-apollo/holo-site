// @flow
import styled from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 104px;
  padding-bottom: 113px;
`;

export const LeftCont = styled.div`
  margin-top: 72px;
  width: 625px;
  margin-right: 70px;
  color: ${palette.white};
`;

export const TopTextCont = styled.p`
  max-width: 406px;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 99px;
`;

export const BigTextCont = styled.strong`
  display: block;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 45px;
`;

export const BottomTextCont = styled.div`
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  float: right;
  width: 214px;
`;

export const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  height: 140px;
`;

export const AdviceFormCont = styled.div`
  width: 387px;
  background: ${palette.white};
`;
