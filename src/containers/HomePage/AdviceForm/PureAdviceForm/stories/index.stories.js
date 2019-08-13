// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import palette from 'common/palette';
import PureAdviceForm from '../index';

storiesOf('Forms', module).add('AdviceForm', () => (
  <div style={{ width: '387px' }}>
    <PureAdviceForm
      backdropColor={color('backdropColor', palette.yellow)}
      messages={{
        headerText: text('headerText', 'Got questions?'),
        nameLabel: 'Name',
        emailLabel: 'Email',
        phoneLabel: 'Phone',
        buttonText: 'Get advice',
        successText: text('successText', 'Success!'),
      }}
      isSubmitting={boolean('isSubmitting', false)}
      handleSubmit={action('handleSubmit')}
      isSuccess={boolean('isSuccess', false)}
      errors={{
        nonFieldErrors: text('nonFieldErrors', ''),
        name: text('nameError', ''),
        email: text('emailError', ''),
        phone: text('phoneError', ''),
      }}
      submitCount={1}
    />
  </div>
));
