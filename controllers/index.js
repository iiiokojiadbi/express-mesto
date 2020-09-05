const {
  getAllUsers, getUser, createUser, updateUser, updateUserAvatar,
} = require('./users');
const { getAllCards, createCard, deleteCard } = require('./cards');

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  updateUserAvatar,
  getAllCards,
  createCard,
  deleteCard,
};
