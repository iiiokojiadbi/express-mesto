const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const { usersRouter, cardsRouter, notFoundRouter } = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const { PORT = 3000 } = process.env;

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users/', usersRouter);
app.use('/cards/', cardsRouter);
app.use('/*', notFoundRouter);

app.listen(PORT, () => {
  console.log(`Приложение слушает порт: ${PORT}`);
});
