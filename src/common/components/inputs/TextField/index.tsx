import React from 'react';
import TextFieldMaterial, { TextFieldProps } from '@material-ui/core/TextField';

import FieldWithError from '../FieldWithError';

type Props = TextFieldProps & {
  errorText?: string;
  maxLength?: number;
};

const TextField = ({ errorText, maxLength, ...rest }: Props) => (
  <FieldWithError errorText={errorText}>
    <TextFieldMaterial
      {...rest}
      fullWidth={true}
      error={Boolean(errorText)}
      inputProps={{ ...rest.inputProps, maxLength }}
      InputLabelProps={{
        ...rest.InputLabelProps,
        style: { fontSize: '12px' },
      }}
      FormHelperTextProps={{
        ...rest.FormHelperTextProps,
        style: { fontSize: '10px' },
      }}
    />
  </FieldWithError>
);

export default TextField;
