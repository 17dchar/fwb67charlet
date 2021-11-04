var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('forecast', { title: 'Search Results for Forecast' });
});

module.exports = router;
