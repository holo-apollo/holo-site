import React from 'react';
import renderer from 'react-test-renderer';

import TextField from '../index';

describe('TextField', function() {
  it('should match snapshot', function() {
    const tree = renderer
      .create(<TextField name="name" label="Label" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
