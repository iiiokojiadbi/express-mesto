const router = require('express').Router();

router.get('/*', (req, res) => {
  console.log('show 404 page');
});

module.exports = router;
