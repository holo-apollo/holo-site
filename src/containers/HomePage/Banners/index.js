// @flow
import React from 'react';
import Slider from 'react-slick';

import { getTranslatedObject } from 'helpers/misc';
import { useTranslation } from 'common/i18n';
import data from './data';
import Banner from './Banner';

const Banners = () => {
  const { i18n } = useTranslation();
  return (
    <Slider
      arrows={false}
      dots={true}
      draggable={false}
      autoplay={true}
      speed={1000}
      cssEase="cubic-bezier(0.165, 0.84, 0.44, 1)"
    >
      {data.map(banner => (
        <Banner
          key={banner.id}
          {...getTranslatedObject(banner, i18n.language, [
            'mainText',
            'subText',
          ])}
        />
      ))}
    </Slider>
  );
};

export default Banners;
