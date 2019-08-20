// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

export const HeaderCont = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: ${palette.white};
`;

export const ContentCont = styled.div`
  margin-top: 70px;
`;

const getSectionStyles = ({ fullWidth }: { fullWidth: boolean }) => {
  if (fullWidth) {
    return css``;
  }
  return css`
    max-width: 1300px;
    padding: 0 20px;
    margin: 0 auto;
  `;
};

export const Section = styled.div`
  ${getSectionStyles};
`;

Section.defaultProps = {
  fullWidth: false,
};
