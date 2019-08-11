// @flow
import styled from 'styled-components';

import palette from 'common/palette';

export const HeaderCont = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: ${palette.white};
`;

export const BelowHeaderContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
`;

export const SearchCont = styled.div`
  width: 310px;
`;

export const MainCont = styled.div`
  margin-top: 100px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
`;

export const ContentCont = styled.div`
  flex-grow: 1;
  max-width: 1300px;
`;

export const ChildrenCont = styled.div`
  margin-top: 75px;
`;
