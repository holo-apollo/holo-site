import React from 'react';
import renderer from 'react-test-renderer';

import Attach from '../index';

describe('Attach', function() {
  it('should match snapshot', function() {
    const tree = renderer.create(<Attach height={30} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
