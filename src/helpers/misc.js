// @flow

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const getEnv = (key: string): string => {
  if (isServer) return (process && process.env && process.env[key]) || '';
  return (window && window.env && window.env[key]) || '';
};

export const capitalize = (input: string): string =>
  input.charAt(0).toUpperCase() + input.slice(1);

export const getTranslatedObject = (
  obj: Object,
  lang: string,
  transFields: string[]
): Object => {
  const translatedObject = { ...obj };
  Object.keys(obj).forEach(field => {
    if (transFields.includes(field)) {
      const langField = `${field}${capitalize(lang)}`;
      if (obj[langField]) {
        translatedObject[field] = obj[langField];
      }
      delete translatedObject[`${field}En`];
      delete translatedObject[`${field}Ru`];
      delete translatedObject[`${field}Uk`];
    }
  });
  return translatedObject;
};
