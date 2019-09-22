import styled from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.footer`
  background-color: ${palette.darkPink};
`;

export const ContentCont = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LeftCont = styled.div`
  margin: 44px 70px 29px 0;
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

export const ContactsItemCont = styled.address`
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

export const MenuWrapper = styled.nav`
  flex-grow: 1;
  margin-top: 44px;
`;

export const MenuCont = styled.ul`
  display: flex;

  & > * {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

export const MenuItemCont = styled.span`
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
