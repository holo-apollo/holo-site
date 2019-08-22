// @flow
import React from 'react';

import { useTranslation } from 'common/i18n';
import { getEnv } from 'helpers/misc';
import {
  getPrintingLink,
  getDesignLink,
  getMaterialsLink,
  getPricesLink,
  getContactsLink,
} from 'helpers/urls';
import {
  Cont,
  ContentCont,
  LeftCont,
  MiddleCont,
  RightCont,
  HoloNameCont,
  HoloDescriptionCont,
  ContactsCont,
  ContactsItemCont,
  CopyrightCont,
  MenuCont,
  Logo,
} from './styled';
import MenuItem from './MenuItem';

const staticRoot = getEnv('STATIC_ROOT');

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <Cont>
      <ContentCont>
        <LeftCont>
          <HoloNameCont>Holo Apollo Art</HoloNameCont>
          <HoloDescriptionCont>{t('workroom')}</HoloDescriptionCont>
          <ContactsCont>
            <ContactsItemCont>
              <span>email</span>:{' '}
              <a href="mailto:ira@holo-apollo.art">ira@holo-apollo.art</a>
            </ContactsItemCont>
            <ContactsItemCont>
              <span>inst</span>:{' '}
              <a
                href="https://www.instagram.com/holo.apollo.art/"
                target="_blank"
              >
                @holo.apollo.art
              </a>
            </ContactsItemCont>
            <ContactsItemCont>
              <span>phone</span>:{' '}
              <a href="tel:+380996335886">+38 099 63 35 886</a>
            </ContactsItemCont>
          </ContactsCont>
          <CopyrightCont>© 2019 Holo Apollo Art {t('copyright')}</CopyrightCont>
        </LeftCont>
        <MiddleCont>
          <MenuCont>
            <MenuItem link={getPrintingLink()}>{t('printing')}</MenuItem>
            <MenuItem link={getDesignLink()}>{t('design')}</MenuItem>
            <MenuItem link={getMaterialsLink()}>{t('materials')}</MenuItem>
            <MenuItem link={getPricesLink()}>{t('prices')}</MenuItem>
            <MenuItem link={getContactsLink()}>{t('contacts')}</MenuItem>
          </MenuCont>
        </MiddleCont>
        <RightCont>
          <Logo src={`${staticRoot}/img/holo-apollo-logo.png`} alt="logo" />
        </RightCont>
      </ContentCont>
    </Cont>
  );
};

export default Footer;
