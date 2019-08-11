import React from 'react';
import Helmet from 'react-helmet';

const HelmetComponent = () => (
  <Helmet
    meta={[
      {
        name: 'description',
        content: 'Holo Apollo description',
      },
    ]}
  />
);

export default HelmetComponent;
