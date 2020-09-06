const mongoose = require('mongoose');
const { validateText, validateUrl } = require('../helpers/validators');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    validate: {
      validator: (name) => validateText(name),
      message: 'Введите правильный текст',
    },
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    validate: {
      validator: (name) => validateText(name),
      message: 'Введите правильный текст',
    },
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (link) => validateUrl(link),
      message: 'Введите правильный url',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
