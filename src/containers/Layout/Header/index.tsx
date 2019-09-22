import React from 'react';
import { useRouter } from 'next/router';

import { Link, useTranslation } from 'common/i18n';
import Button from 'common/components/buttons/Button';
import { getEnv } from 'helpers/misc';
import {
  getHomePageLink,
  getPrintingLink,
  getDesignLink,
  getMaterialsLink,
  getPricesLink,
  getContactsLink,
} from 'helpers/urls';
import LanguageSelect from 'common/components/inputs/LanguageSelect';
import MenuItem from './MenuItem';
import {
  Cont,
  ContentCont,
  LeftCont,
  MiddleCont,
  RightCont,
  Logo,
  LeftTextCont,
  HoloNameCont,
  HoloDescriptionCont,
  MenuCont,
  OrderButtonCont,
  LanguageSelectCont,
} from './styled';

const staticRoot = getEnv('STATIC_ROOT');

const logo3x = `${staticRoot}/img/holo-apollo-logo-transpl@3x.png`;
const logo2x = `${staticRoot}/img/holo-apollo-logo-transpl@2x.png`;
const logo1x = `${staticRoot}/img/holo-apollo-logo-transpl.png`;

const Header = () => {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  const menuItems = [
    { link: getPrintingLink(), label: t('printing') },
    { link: getDesignLink(), label: t('design') },
    { link: getMaterialsLink(), label: t('materials') },
    { link: getPricesLink(), label: t('prices') },
    { link: getContactsLink(), label: t('contacts') },
  ];
  return (
    <Cont>
      <ContentCont>
        <Link href={getHomePageLink()}>
          <a>
            <LeftCont>
              <Logo
                src={logo3x}
                srcSet={`${logo1x}, ${logo2x} 2x, ${logo3x} 3x`}
                alt="logo"
              />
              <LeftTextCont>
                <HoloNameCont>Holo Apollo Art</HoloNameCont>
                <HoloDescriptionCont>{t('workroom')}</HoloDescriptionCont>
              </LeftTextCont>
            </LeftCont>
          </a>
        </Link>
        <MiddleCont>
          <MenuCont>
            {menuItems.map(({ link, label }) => (
              <MenuItem key={link} link={link} isActive={pathname === link}>
                {label}
              </MenuItem>
            ))}
          </MenuCont>
        </MiddleCont>
        <RightCont>
          <OrderButtonCont>
            <Button width={204}>{t('order')}</Button>
          </OrderButtonCont>
          <LanguageSelectCont>
            <LanguageSelect />
          </LanguageSelectCont>
        </RightCont>
      </ContentCont>
    </Cont>
  );
};

export default Header;
