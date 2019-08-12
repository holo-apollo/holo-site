// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  height: 70px;
  border-bottom: solid 1px ${palette.grey};
`;

export const ContentCont = styled.div`
  max-width: 1300px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`;

export const LeftCont = styled.div`
  margin-right: 20px;
  display: flex;
`;

export const MiddleCont = styled.div`
  display: flex;
`;

export const RightCont = styled.div`
  margin-left: 20px;
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

export const HoloNameCont = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export const HoloDescriptionCont = styled.div`
  margin-top: 3px;
  font-size: 12px;
`;

export const MenuCont = styled.div`
  display: flex;
`;

const getMenuItemStyles = ({ isActive }: { isActive: boolean }) => css`
  ${isActive && `border-top: solid 5px ${palette.blue}`};
`;

export const MenuItem = styled.span`
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-top: solid 5px transparent;
  border-bottom: solid 5px transparent;
  ${getMenuItemStyles};

  &:hover {
    color: ${palette.darkestGrey};
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
