const router = require('express').Router();

router.get('/cards/', (req, res) => {
  console.log('show cards');
});

module.exports = router;
