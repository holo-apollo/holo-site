// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  width: 100%;
  padding: 27px 47px 42px 40px;
  border: 1px solid ${palette.trueBlack};
  box-sizing: border-box;
  box-shadow: -9px 10px ${({ backdropColor }) => backdropColor};
`;

export const SuccessCont = styled.div`
  display: flex;
  height: 262px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`;

export const HeaderCont = styled.div`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`;

const getFormContStyles = ({ isSubmitting }: { isSubmitting: boolean }) => css`
  ${isSubmitting && 'opacity: 0.4'};
`;

export const FormCont = styled.div`
  ${getFormContStyles};
`;

export const StyledForm = styled.form`
  margin-top: 14px;
`;

export const FieldCont = styled.div`
  margin-top: 16px;
`;

export const ButtonCont = styled.div`
  margin-top: 42px;
`;

export const ErrorCont = styled.div`
  margin-bottom: 20px;
  color: ${palette.red};
  text-align: center;
  font-size: 10px;
`;
