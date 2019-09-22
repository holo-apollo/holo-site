import React, { useState, FunctionComponent, ComponentProps } from 'react';
import { withFormik } from 'formik';

import { useTranslation } from 'common/i18n';
import validate from './validate';
import handleSubmit from './handleSubmit';
import PureAdviceForm from './PureAdviceForm';

type PureProps = ComponentProps<typeof PureAdviceForm>;

type Props = {
  messages: {
    headerText: string;
  };
  backdropColor: string;
};

// @ts-ignore
const PureAdviceFormWithFormik = withFormik({ validate, handleSubmit })(
  PureAdviceForm
);

const AdviceForm: FunctionComponent<Props> = ({ messages, ...rest }) => {
  const [isSuccess, setSuccess] = useState(false);
  const { t } = useTranslation('advice_form');
  const staticMessages: Record<string, string> = {};
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
  const pureFormMessages: PureProps['messages'] = {
    ...staticMessages,
    ...messages,
  } as any;
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
