// @flow
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { useTranslation, Link } from 'common/i18n';
import { getPrintingLink, getDesignLink } from 'helpers/urls';
import palette from 'common/palette';
import {
  TopCont,
  HeaderTextCont,
  SubTextCont,
  BottomCont,
  BottomLeftCont,
  VerticalLine,
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
  const [visible, setVisible] = useState(false);

  function setVisibleOn(isVisible: boolean) {
    if (isVisible) {
      setVisible(true);
    }
  }

  const columns = [
    [
      'printing',
      'businessCards',
      'invitations',
      'weddingPrinting',
      'labels',
      'posters',
      'menus',
      getPrintingLink(),
    ],
    [
      'design',
      'logo',
      'corporateIdentity',
      'infographics',
      'instagramDesign',
      'printingDesign',
      'techLayouts',
      getDesignLink(),
    ],
  ];

  return (
    <>
      <TopCont>
        <HeaderTextCont>{t('workroom')}</HeaderTextCont>
        <SubTextCont
          dangerouslySetInnerHTML={{ __html: t('needBusinessCards') }}
        />
      </TopCont>
      <BottomCont>
        <VisibilitySensor onChange={setVisibleOn}>
          <BottomLeftCont>
            {columns.map((column, colIndex) => (
              <>
                <VerticalLine visible={visible} index={colIndex} />
                <BottomLeftColumn>
                  <BottomLeftColumnHeader>
                    {t(column[0])}
                  </BottomLeftColumnHeader>
                  {column.slice(1, column.length - 1).map((row, rowIndex) => (
                    <BottomLeftColumnItem
                      index={colIndex * (column.length - 1) + rowIndex}
                      totalItems={column.length - 1}
                      visible={visible}
                    >
                      {t(row)}
                    </BottomLeftColumnItem>
                  ))}
                  <MoreLink
                    index={(colIndex + 1) * column.length - 1}
                    totalItems={column.length - 1}
                    visible={visible}
                  >
                    <Link href={column[column.length - 1]}>
                      <a>{t('more')}</a>
                    </Link>
                  </MoreLink>
                </BottomLeftColumn>
              </>
            ))}
          </BottomLeftCont>
        </VisibilitySensor>
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
