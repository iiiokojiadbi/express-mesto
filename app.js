const express = require('express');
const path = require('path');
const { usersRouter, cardsRouter, notFoundRouter } = require('./routes');

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users/', usersRouter);
app.use('/cards/', cardsRouter);
app.use('/*', notFoundRouter);

app.listen(PORT, () => {
  console.log(`Приложение слушает порт: ${PORT}`);
});
