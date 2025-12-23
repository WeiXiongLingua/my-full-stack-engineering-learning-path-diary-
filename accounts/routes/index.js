var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/account', function(req, res, next) {
  res.render('index');
});

router.get('/account/create', function (req, res, next) {
  res.send('List')
})

module.exports = router;

