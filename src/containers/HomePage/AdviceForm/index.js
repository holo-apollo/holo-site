// @flow
import React, { useState, type ComponentType } from 'react';
import { withFormik } from 'formik';

import { withTranslation } from 'common/i18n';
import validate from './validate';
import handleSubmit from './handleSubmit';
import PureAdviceForm from './PureAdviceForm';

type Props = {
  messages: {
    headerText: string,
  },
  backdropColor: string,
};

type NotEnhancedProps = {
  t: Function,
  ...$Exact<Props>,
};

const PureAdviceFormWithFormik = withFormik({ validate, handleSubmit })(
  PureAdviceForm
);

const NotEnhancedAdviceForm = ({ t, messages, ...rest }: NotEnhancedProps) => {
  const [isSuccess, setSuccess] = useState(false);
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

const i18nHoc = withTranslation('advice_form');

const AdviceForm: ComponentType<Props> = i18nHoc(NotEnhancedAdviceForm);

export default AdviceForm;
