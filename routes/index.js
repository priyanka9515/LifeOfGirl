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


router.get('/submit', function(req, res, next) {
  res.render('submit', { title: 'Submit' });
});


router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'SignIn' });
});


router.post('/addpost', function(req, res) {

    // Set our internal DB variable
    var db = req.db;
    // Set our collection
   var userCollection = db.collection('user');
    // Get our form values. These rely on the "name" attributes
    var title = req.body.title;
    var desc = req.body.desc;
    var link = req.body.link;
    
    var currentTime = new Date();

    var time = currentTime.getTime();
    	
    	id 	 = window.localStorage.getItem('user');
  

    // Submit to the DB
    userCollection.insert({
        "title" : title,
        "desc" :desc,
        "link"	:link,
        "time"	:time,
        "id"	:id}, function (err, doc) {
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



router.post('/login', function(req,res){

 var db = req.db;
    // Set our collection
   var userCollection = db.collection('user');
    // Get our form values. These rely on the "name" attributes
    var id = req.body.name;
    var password = req.body.password;
    var query = {"id": id, "password": password}
     db.collection('user').findOne(query, function(err, user){
      if(err) {throw new Error(err);}
      else if(!user){ 
        console.log('Not found');
    }
      else{ 
        console.log('Found!');
    	res.redirect('/');
    	}
  })
});









router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;
    // Set our collection
   var userCollection = db.collection('user');
    // Get our form values. These rely on the "name" attributes
    var id = req.body.name;
    var password = req.body.password;



    // Submit to the DB
    userCollection.insert({
        "id" : id,
        "password" :password}, function (err, doc) {
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
