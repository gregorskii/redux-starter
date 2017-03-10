const path = require('path');
const config = require('../config');

exports.assetsPath = function (_path) {
  if (process.env.NODE_ENV === 'dev') {
    return _path;
  }
  return `${config[process.env.NODE_ENV].assetsPublicPath}${_path}`;
};

const vendorTest = (module) => {
  return module.resource &&
    /\.js$/.test(module.resource) &&
    /node_modules/.test(module.resource);
};

exports.isVendor = (module) => {
  const vendor = vendorTest(module);
  if (process.env.DEBUG === 'true') {
    if (vendor) {
      util.log(util.colors.green(`Vendoring: ${module.resource}`));
    } else {
      util.log(module.resource);
    }
  }
  return vendor;
};
