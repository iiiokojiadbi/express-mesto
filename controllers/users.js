const { User } = require('../models');

const getAllUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send({ data: users }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

const getUser = (req, res) => {
  const { user } = req.params;

  User.findById(user)
    .then((userData) => res.status(200).send({ data: userData }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
};
