const express = require('express');
const { getAllUsers, getUser, createUser } = require('../controllers');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', createUser);
userRouter.get('/:id', getUser);

module.exports = userRouter;
