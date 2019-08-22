// @flow
import React from 'react';

import { useTranslation, Link } from 'common/i18n';
import { getPrintingLink, getDesignLink } from 'helpers/urls';
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
  MoreLink,
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
            <MoreLink>
              <Link href={getPrintingLink()}>
                <a>{t('more')}</a>
              </Link>
            </MoreLink>
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
            <MoreLink>
              <Link href={getDesignLink()}>
                <a>{t('more')}</a>
              </Link>
            </MoreLink>
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
