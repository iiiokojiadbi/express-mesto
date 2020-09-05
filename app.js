const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { usersRouter, cardsRouter, notFoundRouter } = require('./routes');

const app = express();
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const { PORT = 3000 } = process.env;

app.use((req, res, next) => {
  req.user = {
    _id: '5f53d7dad06292ef2885b678',
  };

  next();
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use('/*', notFoundRouter);

app.listen(PORT, () => {
  console.log(`Приложение слушает порт: ${PORT}`);
});

/*
5f53d7dad06292ef2885b678
*/
