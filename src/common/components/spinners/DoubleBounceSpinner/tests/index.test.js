import React from 'react';
import renderer from 'react-test-renderer';

import DoubleBounceSpinner from '../index';

describe('DoubleBounceSpinner', function() {
  it('should match snapshot', function() {
    const tree = renderer.create(<DoubleBounceSpinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
