// @flow
import { validateEmail, validatePhone } from 'helpers/validators';

import type { Values } from './types';

type Props = {
  messages: {
    fieldRequired: string,
    invalidEmail: string,
    invalidPhone: string,
  },
};

const validate = (values: Values, { messages }: Props) => {
  const errors = {};
  const requiredFields = ['name', 'email', 'phone'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = messages.fieldRequired;
    }
  });
  if (!validateEmail(values.email)) {
    errors.email = messages.invalidEmail;
  }
  if (!validatePhone(values.phone)) {
    errors.phone = messages.invalidPhone;
  }
};

export default validate;
