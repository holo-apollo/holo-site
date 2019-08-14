// @flow
import type { FormikBag } from 'formik';
import type { ApiResponse } from 'apisauce';
import pick from 'lodash/pick';

import { crmApi } from 'helpers/rest';
import type { Values } from './types';

type Props = {
  setSuccess: boolean => void,
  messages: {
    unknownError: string,
  },
};

const handleSubmit = async (
  values: Values,
  {
    props: { setSuccess, messages },
    setSubmitting,
    setFieldError,
  }: FormikBag<Props, Values>
) => {
  const requestValues = pick(values, ['name', 'email', 'phone']);
  const response: ApiResponse<Values> = await crmApi.post(
    'customers/',
    requestValues
  );
  if (response.ok) {
    setSuccess(true);
  } else {
    if (response.data) {
      Object.keys(response.data).forEach(field => {
        setFieldError(field, response.data[field][0]);
      });
      if (response.data.detail) {
        setFieldError('nonFieldErrors', response.data.detail);
      }
    } else {
      setFieldError('nonFieldErrors', messages.unknownError);
    }
  }
  setSubmitting(false);
};

export default handleSubmit;
