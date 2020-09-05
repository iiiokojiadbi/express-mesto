const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { usersRouter, cardsRouter } = require('./routes');
const { ERROR_CODE, ERROR_MESSAGE } = require('./constants');

const app = express();
const { PORT = 3000 } = process.env;

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5f53d7dad06292ef2885b678',
  };

  next();
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((err, req, res, next) => {
  if (err.status !== ERROR_CODE.SERVER_ERROR) {
    res.status(err.status).send({ message: err.message });
    return;
  }
  res.status(ERROR_CODE.SERVER_ERROR).send({ message: `${ERROR_MESSAGE.SERVER_ERROR}: ${err.message}` });
  next();
});

app.use((req, res) => {
  res
    .status(ERROR_CODE.NOT_FOUND)
    .send({ message: ERROR_MESSAGE.NOT_FOUND });
});

app.listen(PORT, () => {
  console.log(`Приложение слушает порт: ${PORT}`);
});

/*
5f53d7dad06292ef2885b678
*/
