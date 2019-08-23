// @flow
import React from 'react';

import { getEnv } from 'helpers/misc';
import { useTranslation } from 'common/i18n';
import palette from 'common/palette';
import {
  Cont,
  LeftCont,
  TopTextCont,
  BigTextCont,
  BottomTextCont,
  RightCont,
  Logo,
  AdviceFormCont,
} from './styled';
import AdviceForm from '../AdviceForm';

const staticRoot = getEnv('STATIC_ROOT');
const logo3x = `${staticRoot}/img/holo-apollo-logo-transpl@3x.png`;
const logo2x = `${staticRoot}/img/holo-apollo-logo-transpl@2x.png`;
const logo1x = `${staticRoot}/img/holo-apollo-logo-transpl.png`;

const BlockFour = () => {
  const { t } = useTranslation('home');
  return (
    <Cont>
      <LeftCont>
        <TopTextCont dangerouslySetInnerHTML={{ __html: t('workroomGoal') }} />
        <BigTextCont>{t('wantCoolDesign')}</BigTextCont>
        <BottomTextCont>{t('leaveApplication')}</BottomTextCont>
      </LeftCont>
      <RightCont>
        <Logo
          src={logo3x}
          srcSet={`${logo1x}, ${logo2x} 2x, ${logo3x} 3x`}
          alt="logo"
        />
        <AdviceFormCont>
          <AdviceForm
            messages={{ headerText: t('adviceFormHeaderText2') }}
            backdropColor={palette.pink}
          />
        </AdviceFormCont>
      </RightCont>
    </Cont>
  );
};

export default BlockFour;
