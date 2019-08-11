// @flow
import React from 'react';
import Link from 'next/link';
import { getEnv } from 'helpers/misc';
import {
  getHomePageLink,
  getGoodsLink,
  getApplicationLink,
} from 'helpers/urls';
import {
  Cont,
  ContentCont,
  LeftCont,
  MiddleCont,
  RightCont,
  Logo,
  MenuCont,
  MenuItem,
} from './styled';

const staticRoot = getEnv('STATIC_ROOT') || '';

const logo3x = `${staticRoot}/img/holo-apollo-logo-transpl@3x.png`;
const logo2x = `${staticRoot}/img/holo-apollo-logo-transpl@2x.png`;
const logo1x = `${staticRoot}/img/holo-apollo-logo-transpl.png`;

const Header = () => (
  <Cont>
    <ContentCont>
      <LeftCont>
        <Link href={getHomePageLink()}>
          <a>
            <Logo
              src={logo3x}
              srcSet={`${logo1x}, ${logo2x} 2x, ${logo3x} 3x`}
              alt="logo"
            />
          </a>
        </Link>
      </LeftCont>
      <MiddleCont>
        <MenuCont>
          <Link href={getGoodsLink()}>
            <a>
              <MenuItem isActive={false}>All goods</MenuItem>
            </a>
          </Link>
          <Link href={getApplicationLink()}>
            <a>
              <MenuItem isActive={false}>Application</MenuItem>
            </a>
          </Link>
        </MenuCont>
      </MiddleCont>
      <RightCont />
    </ContentCont>
  </Cont>
);

export default Header;
