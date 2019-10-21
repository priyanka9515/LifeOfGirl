var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/comments', function(req, res, next) {
  res.render('comments', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'SignUp' });
});


router.get('/ask', function(req, res, next) {
  res.render('ask', { title: 'Express' });
});



router.post('/signup', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var id = req.body.id;
    var password = req.body.password;

    // Set our collection
    var collection = db.get('user');

    // Submit to the DB
    collection.insert({
        "id" : id,
        "password" : password
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect('/');
        }
    });

});





module.exports = router;
