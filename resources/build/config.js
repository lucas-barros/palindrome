const path = require('path');

const config = {
  paths : {
    assets: path.join(process.cwd(), '/resources/assets'),
    public: path.resolve(__dirname, '../../public'),
  }
};

module.exports = config;
