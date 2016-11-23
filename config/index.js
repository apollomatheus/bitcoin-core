'use strict';

const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const findConfig = require('./find-config');

// We install our root directory and config objects on the
// global process object for convenience.
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'mainnet';
}

const env = process.env.NODE_ENV;
// Default configuration
const all = {
  rpc: {}
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  findConfig() || {});
