import React, { FunctionComponent } from 'react';

import { FormikProps } from 'common/types';
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
import { Values } from '../types';

type Props = FormikProps<Values> & {
  messages: {
    headerText: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    buttonText: string;
    successText: string;
  };
  backdropColor: string;
  isSuccess: boolean;
  setSuccess: (isSuccess: boolean) => void;
};

const PureAdviceForm: FunctionComponent<Props> = ({
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
  handleChange,
  isSubmitting,
  errors,
  submitCount,
}) => (
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
              onChange={handleChange}
              errorText={submitCount > 0 ? errors.name : undefined}
            />
          </FieldCont>
          <FieldCont>
            <TextField
              name="email"
              type="email"
              label={emailLabel}
              onChange={handleChange}
              errorText={submitCount > 0 ? errors.email : undefined}
            />
          </FieldCont>
          <FieldCont>
            <TextField
              name="phone"
              label={phoneLabel}
              onChange={handleChange}
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
