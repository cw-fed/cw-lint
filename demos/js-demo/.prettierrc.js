const path = require('path');

module.exports = { ...require(path.join(__dirname, '../../dist')).prettier };
