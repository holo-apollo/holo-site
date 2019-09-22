import { getEnv } from 'helpers/misc';

const staticRoot = getEnv('STATIC_ROOT');

export default [
  { id: 1, imgUrl: `${staticRoot}/img/BFK_invitation_2.png` },
  { id: 2, imgUrl: `${staticRoot}/img/hologram-edge.png` },
  { id: 3, imgUrl: `${staticRoot}/img/BFK_invitation_2.png` },
  { id: 4, imgUrl: `${staticRoot}/img/hologram-edge.png` },
  { id: 5, imgUrl: `${staticRoot}/img/BFK_invitation_2.png` },
];
