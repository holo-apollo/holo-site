import React from 'react';
import renderer from 'react-test-renderer';

import IncrementField from '../index';

describe('IncrementField', function() {
  it('should match snapshot', function() {
    const tree = renderer.create(<IncrementField />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
