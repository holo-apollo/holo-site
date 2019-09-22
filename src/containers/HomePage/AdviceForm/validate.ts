import { validateEmail, validatePhone } from 'helpers/validators';

import { Values } from './types';

type Props = {
  messages: {
    fieldRequired: string;
    invalidEmail: string;
    invalidPhone: string;
  };
};

const validate = (
  values: Values,
  { messages }: Props
): Record<string, string> => {
  const errors: Record<string, string> = {};
  const requiredFields = ['name', 'email', 'phone'] as const;
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = messages.fieldRequired;
    }
  });
  if (!validateEmail(values.email)) {
    errors['email'] = messages.invalidEmail;
  }
  if (!validatePhone(values.phone)) {
    errors['phone'] = messages.invalidPhone;
  }
  return errors;
};

export default validate;
