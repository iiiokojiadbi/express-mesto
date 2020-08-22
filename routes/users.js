const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Все пользователи');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Пользователь с id: ${id}`);
});

module.exports = router;
