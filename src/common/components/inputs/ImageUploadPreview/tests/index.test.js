import React from 'react';
import renderer from 'react-test-renderer';

import ImageUploadPreview from '../index';

describe('ImageUploadPreview', function() {
  it('should match snapshot', function() {
    const tree = renderer
      .create(
        <ImageUploadPreview
          name="name"
          label="Label"
          buttonText="Button text"
          helperText="Helper text"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
