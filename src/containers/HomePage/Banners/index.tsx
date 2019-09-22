import React from 'react';
import Slider from 'react-slick';

import { getTranslatedObject } from 'helpers/misc';
import { useTranslation } from 'common/i18n';
import data from './data';
import Banner from './Banner';

type BannerData = {
  id: number;
  bgUrl: string;
  bannerUrl: string;
  mainText: string;
  mainTextEn: string;
  mainTextUk: string;
  mainTextRu: string;
  subText: string;
  subTextEn: string;
  subTextUk: string;
  subTextRu: string;
};

type TranslatedBannerData = {
  id: number;
  bgUrl: string;
  bannerUrl: string;
  mainText: string;
  subText: string;
};

const getBannerTranslator = (language: string) => (
  banner: BannerData
): TranslatedBannerData =>
  getTranslatedObject(banner, language, ['mainText', 'subText']) as any;

const Banners = () => {
  const { i18n } = useTranslation();
  const translator = getBannerTranslator(i18n.language);
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
        <Banner key={banner.id} {...translator(banner)} />
      ))}
    </Slider>
  );
};

export default Banners;
