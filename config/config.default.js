'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533009481325_4915';

  // add your config here
  config.middleware = [];

  // disable csrf
  config.security = {
    csrf: false,
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/blog',
    options: {
      server: {
        poolSize: 20,
      },
      useNewUrlParser: true,
    },
  };

  config.view = {
    root: path.join(appInfo.baseDir, 'app/assets'),
    mapping: {
      '.html': 'nunjucks',
      '.js': 'assets',
    },
  };

  config.assets = {
    publicPath: '/public/',
    devServer: {
      debug: false,
      command: 'roadhog dev',
      port: 4200,
      env: {
        BROWSER: 'none',
        ESLINT: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:7001',
        PUBLIC_PATH: 'http://127.0.0.1:7001',
      },
    },
  };

  return config;
};

