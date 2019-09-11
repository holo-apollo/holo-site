// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

export const TopCont = styled.div`
  margin-top: 46px;
  margin-bottom: 74px;
`;

export const HeaderTextCont = styled.h1`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 25px;
`;

export const SubTextCont = styled.p`
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

const getVerticalLineStyles = ({
  visible,
  index,
}: {
  visible: boolean,
  index: number,
}) => css`
  height: ${visible ? '100%' : '0.1%'};
  transition: height 0.5s ease-in ${index * 0.5}s;
`;

export const VerticalLine = styled.div`
  width: 1px;
  background-color: ${palette.trueBlack};
  ${getVerticalLineStyles};
`;

export const BottomLeftColumn = styled.ul`
  width: 328px;
  padding-left: 54px;
`;

export const BottomLeftColumnHeader = styled.h3`
  margin: 28px 0 46px;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
`;

const getBottomLeftColumnItemStyles = ({
  index,
  totalItems,
  visible,
}: {
  index: number,
  totalItems: number,
  visible: boolean,
}) => {
  const step = 0.5 / totalItems;
  return css`
    visibility: ${visible ? 'visible' : 'hidden'};
    transition: visibility ${step}s ease-in ${0.5 + index * step}s;
  `;
};

export const BottomLeftColumnItem = styled.li`
  font-size: 14px;
  line-height: 24px;
  ${getBottomLeftColumnItemStyles};
`;

const getMoreLinkStyles = ({
  index,
  totalItems,
  visible,
}: {
  index: number,
  totalItems: number,
  visible: boolean,
}) => {
  const step = 0.5 / totalItems;
  return css`
    visibility: ${visible ? 'visible' : 'hidden'};
    position: relative;
    left: ${visible ? '0' : '-50px'};
    transition: visibility ${step}s ease-in ${0.5 + index * step}s,
      left ${step}s ease-in ${0.5 + (index + 1) * step}s;
  `;
};

export const MoreLink = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  margin-top: 30px;
  color: ${palette.blue};

  &:hover {
    text-decoration: underline;
  }

  ${getMoreLinkStyles};
`;

export const BottomRightCont = styled.div``;

export const AdviceFormCont = styled.div`
  width: 387px;
`;
