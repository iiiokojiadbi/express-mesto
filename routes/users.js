const router = require('express').Router();

router.get('/users/', (req, res) => {
  console.log('show users');
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;

  console.log(`show user id: ${id}`);
});

module.exports = router;
