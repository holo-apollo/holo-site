// @flow
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Switch, Case } from 'react-case-when';

import Layout, { Section } from 'containers/Layout';
import { useTranslation } from 'common/i18n';
import palette from 'common/palette';

import Plan from './Plan';
import {
  HeaderCont,
  Header,
  ContentCont,
  LeftCont,
  VerticalLine,
  Column,
  ColumnHeader,
  ColumnSection,
  ColumnItem,
  RightCont,
  RightContHeader,
  RightContentCont,
} from './styled';

const Prices = () => {
  const { t } = useTranslation('prices');
  const [visible, setVisible] = useState(false);
  const [currentHeader, setCurrentHeader] = useState('printing');
  const [currentItem, setCurrentItem] = useState('businessCards');

  function setVisibleOn(isVisible: boolean) {
    if (isVisible) {
      setVisible(true);
    }
  }

  const column = [
    'businessCards',
    'invitations',
    'weddingPrinting',
    'labels',
    'posters',
    'menus',
  ];

  const plans = [
    {
      headerText: 'Light',
      backdropColor: palette.yellow,
      benefits: [
        t('oneSided'),
        `${t('designerCardboard')} ${t('upTo')} 300${t('mg/m')}2`,
        t('design'),
      ],
      prices: [
        { amount: 200, price: 1290 },
        { amount: 500, price: 2470 },
        { amount: 1000, price: 4610 },
      ],
    },
    {
      headerText: 'Optimal',
      backdropColor: palette.pink,
      benefits: [
        t('twoSided'),
        `${t('designerCardboard')} ${t('from')} 300${t('mg/m')}2`,
        t('logoFoiling'),
        t('miniEmbossing'),
        t('design'),
      ],
      prices: [
        { amount: 200, price: 2035 },
        { amount: 500, price: 3365 },
        { amount: 1000, price: 6105 },
      ],
    },
    {
      headerText: 'Premium',
      backdropColor: palette.blue,
      benefits: [
        t('twoSided'),
        `${t('designerCardboard')} ${t('from')} 300${t('mg/m')}2`,
        t('logoFoiling'),
        t('edgesFoiling'),
        t('3dEmbossing'),
        t('design'),
      ],
      prices: [
        { amount: 200, price: 2610 },
        { amount: 500, price: 4190 },
        { amount: 1000, price: 7930 },
      ],
    },
  ];

  return (
    <Layout>
      <Section>
        <HeaderCont>
          <Header>{t('prices')}</Header>
        </HeaderCont>
        <ContentCont>
          <VisibilitySensor onChange={setVisibleOn}>
            <LeftCont>
              <VerticalLine visible={visible} />
              <Column>
                <ColumnHeader
                  active={currentHeader === 'printing'}
                  onClick={() => setCurrentHeader('printing')}
                >
                  {t('printing')}
                </ColumnHeader>
                <ColumnSection
                  visible={visible && currentHeader === 'printing'}
                >
                  {column.map(item => (
                    <ColumnItem
                      key={item}
                      active={currentItem === item}
                      onClick={() => setCurrentItem(item)}
                    >
                      {t(item)}
                    </ColumnItem>
                  ))}
                </ColumnSection>
                <ColumnHeader
                  active={currentHeader === 'design'}
                  onClick={() => setCurrentHeader('design')}
                >
                  {t('design')}
                </ColumnHeader>
              </Column>
            </LeftCont>
          </VisibilitySensor>
          <RightCont>
            <RightContHeader>
              <Switch>
                <Case when={currentHeader === 'printing'}>
                  {t(currentItem)} 9x5 {t('cm')}
                </Case>
              </Switch>
            </RightContHeader>
            <RightContentCont>
              <Switch>
                <Case when={currentHeader === 'printing'}>
                  {plans.map(plan => (
                    <Plan key={plan.headerText} {...plan} />
                  ))}
                </Case>
              </Switch>
            </RightContentCont>
          </RightCont>
        </ContentCont>
      </Section>
    </Layout>
  );
};

Prices.getInitialProps = async () => ({
  namespacesRequired: ['common', 'prices'],
});

export default Prices;
