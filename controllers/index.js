const { getAllUsers, getUser, createUser } = require('./users');
const { getAllCards, createCard, deleteCard } = require('./cards');

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  getAllCards,
  createCard,
  deleteCard,
};
