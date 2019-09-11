// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

export const HeaderCont = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: ${palette.white};
`;

export const ContentCont = styled.main`
  margin-top: 70px;
`;

const getSectionStyles = ({
  fullWidth,
  background,
}: {
  fullWidth: boolean,
  background: string,
}) => {
  if (fullWidth) {
    return css`
      background: ${background};
    `;
  }
  return css`
    max-width: 1300px;
    padding: 0 20px;
    margin: 0 auto;
    background: ${background};
  `;
};

export const Section = styled.section`
  ${getSectionStyles};
`;

Section.defaultProps = {
  fullWidth: false,
  background: 'transparent',
};
