var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello there!' });
});

router.get('/', function(req, res, next) {
  res.render('index', console.log('another index endpoint'));
});

module.exports = router;
