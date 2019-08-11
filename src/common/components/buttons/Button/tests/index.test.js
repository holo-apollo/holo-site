import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../index';

describe('Button', function() {
  it('should match snapshot', function() {
    const tree = renderer.create(<Button>Button text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
