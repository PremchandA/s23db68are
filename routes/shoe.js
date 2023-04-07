var express = require('express');
var router = express.Router();

/* GET Notebook details */
router.get('/', function(req, res, next) {
  res.render('shoe', { title: 'Search Results of shoe' });
});

module.exports = router;
