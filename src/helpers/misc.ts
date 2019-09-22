export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const getEnv = (key: string): string => {
  if (isServer) return (process && process.env && process.env[key]) || '';
  const w: any = window;
  return (w && w['env'] && w['env'][key]) || '';
};

export const capitalize = (input: string): string =>
  input.charAt(0).toUpperCase() + input.slice(1);

// TODO: improve type instead of object
export const getTranslatedObject = (
  obj: Record<string, any>,
  lang: string,
  transFields: string[]
): Record<string, any> => {
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
