// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  height: 70px;
  border-bottom: solid 1px ${palette.grey};
`;

export const ContentCont = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LeftCont = styled.div`
  margin-right: 70px;
  display: flex;
`;

export const MiddleCont = styled.nav`
  display: flex;
  flex-grow: 1;
`;

export const RightCont = styled.div`
  margin-left: 70px;
  display: flex;
`;

export const Logo = styled.img`
  width: 70px;
  margin-top: 4px;
`;

export const LeftTextCont = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HoloNameCont = styled.strong`
  font-weight: bold;
  font-size: 18px;
`;

export const HoloDescriptionCont = styled.em`
  margin-top: 3px;
  font-size: 12px;
  font-style: normal;
`;

export const MenuCont = styled.ul`
  display: flex;
  flex-grow: 1;

  & > * {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

const getMenuItemContStyles = ({ isActive }: { isActive: boolean }) => css`
  ${isActive && `color: ${palette.blue}`};
`;

export const MenuItemCont = styled.span`
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-top: solid 5px transparent;
  border-bottom: solid 5px transparent;
  ${getMenuItemContStyles};

  &:hover {
    color: ${palette.blue};
    border-top: solid 5px ${palette.blue};
  }
`;

export const OrderButtonCont = styled.div`
  margin-right: 70px;
  display: flex;
  align-items: center;
`;

export const LanguageSelectCont = styled.div`
  display: flex;
  align-items: center;
`;
