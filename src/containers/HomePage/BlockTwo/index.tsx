import React from 'react';

import { getEnv } from 'helpers/misc';
import { useTranslation } from 'common/i18n';
import { HeaderCont, ContentCont, Image, TextCont } from './styled';

const staticRoot = getEnv('STATIC_ROOT');

const BlockTwo = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <HeaderCont>{t('whatIsSilkScreen')}</HeaderCont>
      <ContentCont>
        <Image
          alt="silk-screen"
          src={`${staticRoot}/img/emarts-emarts-ZCTh4f4mv18-unsplash.png`}
        />
        <TextCont
          dangerouslySetInnerHTML={{ __html: t('technologyDescription') }}
        />
      </ContentCont>
    </>
  );
};

export default BlockTwo;
