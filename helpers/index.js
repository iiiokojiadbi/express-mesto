const fs = require('fs').promises;

const {
  validateUrl,
  validateText,
} = require('./validators');

const getFile = (file) => fs.readFile(file);

module.exports = {
  getFile,
  validateUrl,
  validateText,
};
