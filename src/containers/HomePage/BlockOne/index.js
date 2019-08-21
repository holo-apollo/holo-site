// @flow
import React from 'react';

import { useTranslation } from 'common/i18n';
import palette from 'common/palette';
import {
  TopCont,
  HeaderTextCont,
  SubTextCont,
  BottomCont,
  BottomLeftCont,
  BottomLeftColumn,
  BottomLeftColumnHeader,
  BottomLeftColumnItem,
  BottomRightCont,
  AdviceFormCont,
} from './styled';
import AdviceForm from '../AdviceForm';

const BlockOne = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <TopCont>
        <HeaderTextCont>{t('workroom')}</HeaderTextCont>
        <SubTextCont
          dangerouslySetInnerHTML={{ __html: t('needBusinessCards') }}
        />
      </TopCont>
      <BottomCont>
        <BottomLeftCont>
          <BottomLeftColumn>
            <BottomLeftColumnHeader>{t('printing')}</BottomLeftColumnHeader>
            <BottomLeftColumnItem>{t('businessCards')}</BottomLeftColumnItem>
            <BottomLeftColumnItem>{t('invitations')}</BottomLeftColumnItem>
            <BottomLeftColumnItem>{t('weddingPrinting')}</BottomLeftColumnItem>
            <BottomLeftColumnItem>{t('labels')}</BottomLeftColumnItem>
            <BottomLeftColumnItem>{t('posters')}</BottomLeftColumnItem>
            <BottomLeftColumnItem>{t('menus')}</BottomLeftColumnItem>
          </BottomLeftColumn>
          <BottomLeftColumn>
            <BottomLeftColumnHeader>{t('design')}</BottomLeftColumnHeader>
            <BottomLeftColumnItem>{t('logo')}</BottomLeftColumnItem>
            <BottomLeftColumnItem>
              {t('corporateIdentity')}
            </BottomLeftColumnItem>
            <BottomLeftColumnItem>{t('infographics')}</BottomLeftColumnItem>
            <BottomLeftColumnItem>{t('instagramDesign')}</BottomLeftColumnItem>
            <BottomLeftColumnItem>{t('printingDesign')}</BottomLeftColumnItem>
            <BottomLeftColumnItem>{t('techLayouts')}</BottomLeftColumnItem>
          </BottomLeftColumn>
        </BottomLeftCont>
        <BottomRightCont>
          <AdviceFormCont>
            <AdviceForm
              messages={{ headerText: t('adviceFormHeaderText1') }}
              backdropColor={palette.yellow}
            />
          </AdviceFormCont>
        </BottomRightCont>
      </BottomCont>
    </>
  );
};

export default BlockOne;
