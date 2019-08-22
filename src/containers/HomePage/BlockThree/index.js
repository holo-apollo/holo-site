// @flow
import React from 'react';

import { useTranslation } from 'common/i18n';
import { getEnv } from 'helpers/misc';
import {
  Cont,
  LeftCont,
  PreviewHeader,
  Preview,
  RightCont,
  Table,
  TableHead,
  Row,
  FirstCol,
  Col,
} from './styled';

const staticRoot = getEnv('STATIC_ROOT');

const BlockThree = () => {
  const { t } = useTranslation('home');
  return (
    <Cont>
      <LeftCont>
        <PreviewHeader>
          {t('digitalPrinting')} {t('zoomedIn')}
        </PreviewHeader>
        <Preview previewUrl={`${staticRoot}/img/digital-print-preview.svg`} />
        <PreviewHeader>
          {t('screenPrinting')} {t('zoomedIn')}
        </PreviewHeader>
        <Preview previewUrl={`${staticRoot}/img/screen-print-preview.svg`} />
      </LeftCont>
      <RightCont>
        <Table>
          <Row>
            <FirstCol />
            <TableHead>{t('digitalPrinting')}</TableHead>
            <TableHead>{t('screenPrinting')}</TableHead>
          </Row>
          <Row>
            <FirstCol>{t('printingOnDarkPaper')}</FirstCol>
            <Col>{t('no')}</Col>
            <Col>{t('yes')}</Col>
          </Row>
          <Row>
            <FirstCol>{t('inkTexture')}</FirstCol>
            <Col>{t('no')}</Col>
            <Col>{t('yes')}</Col>
          </Row>
          <Row>
            <FirstCol>{t('sparkles')}</FirstCol>
            <Col>{t('no')}</Col>
            <Col>{t('yes')}</Col>
          </Row>
          <Row>
            <FirstCol>{t('denseCardboard')}</FirstCol>
            <Col>{t('no')}</Col>
            <Col>{t('yes')}</Col>
          </Row>
          <Row>
            <FirstCol>{t('largeCirculation')}</FirstCol>
            <Col>{t('yes')}</Col>
            <Col>{t('yes')}</Col>
          </Row>
          <Row>
            <FirstCol>{t('fullColor')}</FirstCol>
            <Col>{t('yes')}</Col>
            <Col>{t('no')}</Col>
          </Row>
        </Table>
      </RightCont>
    </Cont>
  );
};

export default BlockThree;
