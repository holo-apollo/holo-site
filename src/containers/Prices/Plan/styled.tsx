import styled from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  height: 430px;
  border: 1px solid ${palette.trueBlack};
  padding: 27px 20px 32px;
  flex-basis: 0;
  flex-grow: 1;
  box-shadow: -9px 10px
    ${({ backdropColor }: { backdropColor: string }) => backdropColor};
  transition: box-shadow 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0
      ${({ backdropColor }: { backdropColor: string }) => backdropColor};
  }

  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const TopCont = styled.div``;

export const BottomCont = styled.div``;

export const Header = styled.h4`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  text-align: center;
  margin-bottom: 26px;
`;

export const Benefits = styled.ul`
  font-size: 12px;
  line-height: 12px;
  text-align: center;
`;

export const BenefitCont = styled.li`
  margin-bottom: 15px;
`;

export const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
`;

export const PricesCont = styled.ul`
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 14px;
  padding: 0 40px;
`;

export const PriceItemCont = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const AmountCont = styled.div``;

export const PriceCont = styled.div`
  font-weight: bold;
`;
