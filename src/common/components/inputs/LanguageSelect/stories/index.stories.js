import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { PureLanguageSelect } from '../index';

storiesOf('Inputs', module).add('LanguageSelect', () => (
  <div style={{ width: '80px' }}>
    <PureLanguageSelect onSelect={action('onSelect')} selectedValue="uk" />
  </div>
));
