// @flow
import { create } from 'apisauce';

import { getEnv } from './misc';

const createApi = (apiRoot: string) => {
  return create({
    baseURL: apiRoot,
    headers: {
      post: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      common: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    },
  });
};

export const cmsApi = createApi(getEnv('CMS_API_ROOT') || '/');

export const crmApi = createApi(getEnv('CRM_API_ROOT') || '/');
