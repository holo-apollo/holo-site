// @flow
import React from 'react';

import { getTranslatedObject } from 'helpers/misc';
import { useTranslation } from 'common/i18n';
import data from './data';
import Banner from './Banner';

const Banners = () => {
  const { i18n } = useTranslation();
  return (
    <>
      {data.map(banner => (
        <Banner
          key={banner.id}
          {...getTranslatedObject(banner, i18n.language, [
            'mainText',
            'subText',
          ])}
        />
      ))}
    </>
  );
};

export default Banners;
