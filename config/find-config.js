'use strict';

const path = require('path');
const fs = require('fs');

/**
 * Will return the path and bitcore-node configuration
 * @param {String} cwd - The absolute path to the current working directory
 * @returns {Object} {config, path} Path and content of the configuration file.
 */
const findConfig = function() {
  let directory = __dirname;
  const fileName = `rpc-config.${process.env.NODE_ENV}.json`
  /* eslint no-sync: "off"*/
  while (!fs.existsSync(path.resolve(directory, fileName))) {
    directory = path.resolve(directory, '../');
    if (directory === '/') {
      return false;
    }
  }
  return require(path.resolve(directory, fileName));
}

module.exports = findConfig;