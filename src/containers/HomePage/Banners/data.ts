// temp file until CMS is implemented

import { getEnv } from 'helpers/misc';

const staticRoot = getEnv('STATIC_ROOT');

export default [
  {
    id: 1,
    bgUrl: `${staticRoot}/img/bg.svg`,
    bannerUrl: `${staticRoot}/img/banner.png`,
    mainText: 'Your Tactile Advantage',
    mainTextEn: 'Your Tactile Advantage',
    mainTextUk: 'Твоя Тактильна Перевага',
    mainTextRu: 'Твоё Тактильное Преимущество',
    subText:
      'From great love to quality printing, we have opened a unique workroom that combines a silk-screen printing house and a design studio.',
    subTextEn:
      'From great love to quality printing, we have opened a unique workroom that combines a silk-screen printing house and a design studio.',
    subTextUk:
      'Від великої любові до якісної поліграфії, ми відкрили унікальну майстерню, що поєднує в собі шовкографічну друкарню і дизайн студію.',
    subTextRu:
      'От большой любви к качественной полиграфии, мы открыли уникальную мастерскую, объединяющую в себе шелкографическую типографию и дизайн студию.',
  },
  {
    id: 2,
    bgUrl: `${staticRoot}/img/bg.svg`,
    bannerUrl: `${staticRoot}/img/banner.png`,
    mainText: 'Slide 2',
    mainTextEn: 'Slide 2',
    mainTextUk: 'Слайд 2',
    mainTextRu: 'Слайд 2',
    subText:
      'From great love to quality printing, we have opened a unique workroom that combines a silk-screen printing house and a design studio.',
    subTextEn:
      'From great love to quality printing, we have opened a unique workroom that combines a silk-screen printing house and a design studio.',
    subTextUk:
      'Від великої любові до якісної поліграфії, ми відкрили унікальну майстерню, що поєднує в собі шовкографічну друкарню і дизайн студію.',
    subTextRu:
      'От большой любви к качественной полиграфии, мы открыли уникальную мастерскую, объединяющую в себе шелкографическую типографию и дизайн студию.',
  },
];
