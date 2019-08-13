// @flow
import React from 'react';
import { type FormikProps } from 'formik';

import TextField from 'common/components/inputs/TextField';
import Button from 'common/components/buttons/Button';
import {
  Cont,
  SuccessCont,
  FormCont,
  HeaderCont,
  StyledForm,
  FieldCont,
  ButtonCont,
  ErrorCont,
} from './styled';
import type { Values } from '../types';

type Props = FormikProps<Values> & {
  messages: {
    headerText: string,
    nameLabel: string,
    emailLabel: string,
    phoneLabel: string,
    buttonText: string,
    successText: string,
  },
  backdropColor: string,
  isSuccess: boolean,
};

const PureAdviceForm = ({
  backdropColor,
  isSuccess,
  messages: {
    successText,
    headerText,
    nameLabel,
    emailLabel,
    phoneLabel,
    buttonText,
  },
  handleSubmit,
  isSubmitting,
  errors,
  submitCount,
}: Props) => (
  <Cont backdropColor={backdropColor}>
    {isSuccess && <SuccessCont>{successText}</SuccessCont>}
    {!isSuccess && (
      <FormCont isSubmitting={isSubmitting}>
        <HeaderCont>{headerText}</HeaderCont>
        <StyledForm onSubmit={handleSubmit}>
          {errors.nonFieldErrors && (
            <ErrorCont>{errors.nonFieldErrors}</ErrorCont>
          )}
          <FieldCont>
            <TextField
              name="name"
              label={nameLabel}
              errorText={submitCount > 0 ? errors.name : undefined}
            />
          </FieldCont>
          <FieldCont>
            <TextField
              name="email"
              type="email"
              label={emailLabel}
              errorText={submitCount > 0 ? errors.email : undefined}
            />
          </FieldCont>
          <FieldCont>
            <TextField
              name="phone"
              label={phoneLabel}
              errorText={submitCount > 0 ? errors.phone : undefined}
            />
          </FieldCont>
          <ButtonCont>
            <Button type="submit" width={300} disabled={isSubmitting}>
              {buttonText}
            </Button>
          </ButtonCont>
        </StyledForm>
      </FormCont>
    )}
  </Cont>
);

export default PureAdviceForm;
