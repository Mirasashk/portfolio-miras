var express = require('express');
var router = express.Router();

/* React Icons. */
router.get('/images/reactIcon', function (req, res) {
  res.sendFile('react-logo-teal.png', { root: 'public/images' });
});

module.exports = router;
