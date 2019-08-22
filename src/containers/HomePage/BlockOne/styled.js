// @flow
import styled from 'styled-components';

import palette from 'common/palette';

export const TopCont = styled.div`
  margin-top: 46px;
  margin-bottom: 74px;
`;

export const HeaderTextCont = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 25px;
`;

export const SubTextCont = styled.div`
  font-size: 14px;
  line-height: 18px;
`;

export const BottomCont = styled.div`
  margin-bottom: 78px;
  display: flex;
  justify-content: space-between;
`;

export const BottomLeftCont = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const BottomLeftColumn = styled.div`
  width: 328px;
  padding-left: 54px;
  border-left: 1px solid ${palette.trueBlack};
`;

export const BottomLeftColumnHeader = styled.div`
  margin: 28px 0 46px;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
`;

export const BottomLeftColumnItem = styled.div`
  font-size: 14px;
  line-height: 24px;
`;

export const MoreLink = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  margin-top: 30px;
  color: ${palette.blue};

  &:hover {
    text-decoration: underline;
  }
`;

export const BottomRightCont = styled.div``;

export const AdviceFormCont = styled.div`
  width: 387px;
`;
