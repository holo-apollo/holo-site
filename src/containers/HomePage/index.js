// @flow
import React from 'react';

import palette from 'common/palette';
import Layout, { Section } from 'containers/Layout';
import { useTranslation } from 'common/i18n';
import AdviceForm from './AdviceForm';
import Banners from './Banners';
import { AdviceFormCont } from './styled';

const HomePage = () => {
  const { t } = useTranslation('home');
  return (
    <Layout>
      <Section fullWidth={true}>
        <Banners />
      </Section>
      <Section>
        <AdviceFormCont>
          <AdviceForm
            messages={{ headerText: t('adviceFormHeaderText1') }}
            backdropColor={palette.yellow}
          />
        </AdviceFormCont>
        <AdviceFormCont>
          <AdviceForm
            messages={{ headerText: t('adviceFormHeaderText2') }}
            backdropColor={palette.pink}
          />
        </AdviceFormCont>
      </Section>
    </Layout>
  );
};

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'home', 'advice_form'],
});

export default HomePage;
