const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Все карточки');
});

module.exports = router;
