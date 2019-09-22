import React from 'react';

import { useTranslation } from 'common/i18n';
import Button from 'common/components/buttons/Button';

import {
  Cont,
  TopCont,
  BottomCont,
  Header,
  Benefits,
  BenefitCont,
  ButtonCont,
  PricesCont,
  PriceItemCont,
  AmountCont,
  PriceCont,
} from './styled';

type Props = {
  backdropColor: string;
  headerText: string;
  benefits: string[];
  prices: Array<{ amount: number; price: number }>;
};

const Plan = ({ backdropColor, headerText, benefits, prices }: Props) => {
  const { t: commonT } = useTranslation('common');
  const { t: pricesT } = useTranslation('prices');
  return (
    <Cont backdropColor={backdropColor}>
      <TopCont>
        <Header>{headerText}</Header>
        <Benefits>
          {benefits.map(item => (
            <BenefitCont key={item}>{item}</BenefitCont>
          ))}
        </Benefits>
      </TopCont>
      <BottomCont>
        <PricesCont>
          {prices.map(({ amount, price }) => (
            <PriceItemCont key={amount}>
              <AmountCont>
                {amount} {pricesT('pieces')}
              </AmountCont>
              <PriceCont>
                {price} {pricesT('uah')}
              </PriceCont>
            </PriceItemCont>
          ))}
        </PricesCont>
        <ButtonCont>
          <Button width={180}>{commonT('order')}</Button>
        </ButtonCont>
      </BottomCont>
    </Cont>
  );
};

export default Plan;
