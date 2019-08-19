// @flow
import React, { useState } from 'react';
import { withFormik } from 'formik';

import { useTranslation } from 'common/i18n';
import validate from './validate';
import handleSubmit from './handleSubmit';
import PureAdviceForm from './PureAdviceForm';

type Props = {
  messages: {
    headerText: string,
  },
  backdropColor: string,
};

const PureAdviceFormWithFormik = withFormik({ validate, handleSubmit })(
  PureAdviceForm
);

const AdviceForm = ({ messages, ...rest }: Props) => {
  const [isSuccess, setSuccess] = useState(false);
  const { t } = useTranslation('advice_form');
  const staticMessages = {};
  [
    'successText',
    'nameLabel',
    'emailLabel',
    'phoneLabel',
    'buttonText',
    'fieldRequired',
    'invalidEmail',
    'invalidPhone',
    'unknownError',
  ].forEach(key => {
    staticMessages[key] = t(key);
  });
  const pureFormMessages = {
    ...staticMessages,
    ...messages,
  };
  return (
    <PureAdviceFormWithFormik
      isSuccess={isSuccess}
      setSuccess={setSuccess}
      messages={pureFormMessages}
      {...rest}
    />
  );
};

export default AdviceForm;
