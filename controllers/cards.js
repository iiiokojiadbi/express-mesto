// const path = require('path');
// const getFile = require('../helpers');

// const getCards = (req, res) => getFile(path.join(__dirname, '..', 'data', 'cards.json'))
//   .then((data) => {
//     res
//       .status(200)
//       .send(JSON.parse(data));
//   }).catch((error) => {
//     res
//       .status(500)
//       .send({ message: `Произошла ошибка ${error}` });
//   });

const { Card } = require('../models');

const getAllCards = (req, res) => {
  Card.find({})
    .populate('user')
    .then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

const deleteCard = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndRemove(cardId)
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err}` }));
};

module.exports = {
  getAllCards,
  createCard,
  deleteCard,
};
