var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/comments', function(req, res, next) {
  res.render('comments', { title: 'Express' });
});

router.get('/ask', function(req, res, next) {
  res.render('ask', { title: 'Express' });
});



module.exports = router;
