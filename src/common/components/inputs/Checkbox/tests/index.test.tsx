import React from 'react';
import renderer from 'react-test-renderer';

import Checkbox from '../index';

describe('Checkbox', function() {
  it('should match snapshot', function() {
    const tree = renderer
      .create(<Checkbox name="name" label="Label" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
