// @flow
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { getEnv } from 'helpers/misc';
import { useTranslation } from 'common/i18n';
import palette from 'common/palette';
import Button from 'common/components/buttons/Button';
import Column from './Column';
import { TopCont, TopLeftCont, ButtonCont, ColumnsCont } from './styled';

const staticRoot = getEnv('STATIC_ROOT');

const BlockFive = () => {
  const { t } = useTranslation('home');
  const [visible, setVisible] = useState(false);

  function setVisibleOn(isVisible: boolean) {
    if (isVisible) {
      setVisible(true);
    }
  }

  return (
    <>
      <TopCont>
        <TopLeftCont>{t('effects')}</TopLeftCont>
        <ButtonCont>
          <Button width={202}>{t('ourWork')}</Button>
        </ButtonCont>
      </TopCont>
      <VisibilitySensor
        onChange={setVisibleOn}
        partialVisibility={true}
        minTopValue={300}
      >
        <ColumnsCont>
          <Column
            headerText={t('volume')}
            description={t('volumeDescription')}
            background={palette.pink}
            color={palette.white}
            imageUrl={`${staticRoot}/img/volume.png`}
            visible={visible}
            index={0}
          />
          <Column
            headerText={t('gloss')}
            description={t('glossDescription')}
            background={palette.black}
            color={palette.white}
            imageUrl={`${staticRoot}/img/gloss.png`}
            visible={visible}
            index={1}
          />
          <Column
            headerText={t('chic')}
            description={t('chicDescription')}
            background={palette.yellow}
            color={palette.black}
            imageUrl={`${staticRoot}/img/chic.png`}
            visible={visible}
            index={2}
          />
        </ColumnsCont>
      </VisibilitySensor>
    </>
  );
};

export default BlockFive;
