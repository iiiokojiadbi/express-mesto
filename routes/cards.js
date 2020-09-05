const express = require('express');
const { getAllCards, createCard, deleteCard } = require('../controllers');

const cardsRouter = express.Router();

cardsRouter.get('/', getAllCards);
cardsRouter.post('/', createCard);
cardsRouter.delete('/:cardId', deleteCard);

module.exports = cardsRouter;
