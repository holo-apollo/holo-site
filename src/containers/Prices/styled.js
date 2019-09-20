// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

export const HeaderCont = styled.div`
  padding: 70px 0 60px;
`;

export const Header = styled.h1`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
`;

export const ContentCont = styled.div`
  display: flex;
  margin-bottom: 94px;
`;

export const LeftCont = styled.div`
  display: flex;
  margin-right: 10px;
`;

const getVerticalLineStyles = ({ visible }: { visible: boolean }) => css`
  height: ${visible ? '310px' : '0'};
  transition: height 0.5s ease-in;
`;

export const VerticalLine = styled.div`
  width: 1px;
  background-color: ${palette.trueBlack};
  ${getVerticalLineStyles};
`;

export const Column = styled.ul`
  width: 328px;
  padding-left: 54px;
`;

export const ColumnSection = styled.div`
  margin-bottom: ${({ visible }) => (visible ? '25px' : '0')};
  height: ${({ visible }) => (visible ? '164px' : '0')};
  overflow: hidden;
  transition: height 0.5s ease-in, margin-bottom 0.5s ease-in;
`;

export const ColumnHeader = styled.h3`
  margin-bottom: 22px;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  cursor: pointer;
  color: ${({ active }) => (active ? palette.blue : palette.black)};
`;

export const ColumnItem = styled.li`
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  color: ${({ active }) => (active ? palette.blue : palette.black)};
`;

export const RightCont = styled.div`
  flex-grow: 1;
`;

export const RightContHeader = styled.h3`
  font-weight: normal;
  font-size: 24px;
  line-height: 42px;
  margin-bottom: 32px;
`;

export const RightContentCont = styled.div`
  width: 100%;
  display: flex;
`;
