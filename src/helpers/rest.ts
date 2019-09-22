import { create } from 'apisauce';

import { i18n } from 'common/i18n';
import { getEnv } from './misc';

const createApi = (apiRoot: string) => {
  const api = create({
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
  api.addRequestTransform(request => {
    request.headers['Accept-Language'] = i18n.language;
  });
  return api;
};

export const cmsApi = createApi(getEnv('CMS_API_ROOT') || '/');

export const crmApi = createApi(getEnv('CRM_API_ROOT') || '/');
