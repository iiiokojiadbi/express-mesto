const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('show cards');
});

module.exports = router;
