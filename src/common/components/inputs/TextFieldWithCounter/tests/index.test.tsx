import React from 'react';
import renderer from 'react-test-renderer';

import TextFieldWithCounter from '../index';

describe('TextFieldWithCounter', function() {
  it('should match snapshot', function() {
    const tree = renderer
      .create(
        <TextFieldWithCounter name="name" label="Label" maxLength={100} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
