import React from 'react';
import renderer from 'react-test-renderer';

import Close from '../index';

describe('Close', function() {
  it('should match snapshot', function() {
    const tree = renderer.create(<Close />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
