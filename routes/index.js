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



router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;
    // Set our collection
    var collection = db.get('user');
    // Get our form values. These rely on the "name" attributes
    var id = req.body.name;
    var password = req.body.password;

 
  

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
