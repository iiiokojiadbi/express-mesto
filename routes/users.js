const express = require('express');
const { getAllUsers, getUser, createUser } = require('../controllers/users.js');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', createUser);
userRouter.get('/:id', getUser);

module.exports = userRouter;
