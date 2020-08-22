const express = require('express');
const path = require('path');
const { userRouter, cardRouter, notFoundRouter } = require('./routes');

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/users/', userRouter);
app.use('/cards/', cardRouter);
app.use('/*', notFoundRouter);

app.listen(PORT, () => {
  console.log(`Приложение слушает порт: ${PORT}`);
});
