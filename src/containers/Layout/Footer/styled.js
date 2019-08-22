// @flow
import styled from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  background-color: ${palette.darkPink};
`;

export const ContentCont = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const LeftCont = styled.div`
  margin: 44px 70px 29px 0;
`;

export const MiddleCont = styled.div`
  display: flex;
  flex-grow: 1;
  margin-top: 44px;
`;

export const RightCont = styled.div`
  margin: 16px 0 9px 70px;
`;

export const HoloNameCont = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
`;

export const HoloDescriptionCont = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 12px;
`;

export const ContactsCont = styled.div`
  margin: 38px 0 37px;
`;

export const ContactsItemCont = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;

  span {
    text-decoration: underline;
  }

  a:hover {
    color: ${palette.white};
  }
`;

export const CopyrightCont = styled.div`
  font-size: 12px;
  line-height: 12px;
`;

export const MenuCont = styled.div`
  display: flex;
  flex-grow: 1;

  & > * {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

export const MenuItemCont = styled.span`
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 0;

  &:hover {
    color: ${palette.white};
  }
`;

export const Logo = styled.img`
  width: 162px;
`;
