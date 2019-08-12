const path = require('path');

module.exports = async ({ config }) => {
  config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));
  return config;
};
