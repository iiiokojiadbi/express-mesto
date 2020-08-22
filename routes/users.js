const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('show users');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  console.log(`show user id: ${id}`);
});

module.exports = router;
