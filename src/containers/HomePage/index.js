// @flow
import React from 'react';

import palette from 'common/palette';
import Layout from 'containers/Layout';
import { withTranslation } from 'common/i18n';
import AdviceForm from './AdviceForm';
import { AdviceFormCont } from './styled';

type Props = {
  t: Function,
};

const HomePage = ({ t }: Props) => {
  return (
    <Layout>
      {t('welcome')}
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
    </Layout>
  );
};

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'home', 'advice_form'],
});

export default withTranslation('home')(HomePage);
