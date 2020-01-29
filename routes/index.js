var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';
var bcrypt=require('bcrypt');
var mongoose=require('mongoose');
var app=express();
var auth = require("../controllers/AuthController.js");
var User = require("../models/user.js");
mongoose.connect('mongodb://localhost/node-auth')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));


var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

router.use(passport.initialize());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(passport.initialize());
app.use(passport.session());

// route for register action
router.post('/register', auth.doRegister);
router.post('/login', auth.doLogin)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/comments', function(req, res, next) {
//   res.render('comments', { title: 'Express' });
// });



// router.get('/signup', function(req, res, next) {
//   res.render('signup', { title: 'SignUp' });
// });


// router.get('/ask', function(req, res, next) {
//   res.render('ask', { title: 'Express' });
// });

router.get('/login',function(req, res, next) {
  res.render('signin');
});
router.post('/login', auth.doLogin);


// router.get('/signin', function(req, res, next) {
//   res.render('signin', { title: 'SignIn' });
// });
router.get('/register', auth.register);
router.get('/signin', auth.login);
// router.get('/signin', submit);  
// router.post('/addpost', function(req, res) {

//     // Set our internal DB variable
//     var db = req.db;
//     // Set our collection
//    var userCollection = db.collection('post');
//     // Get our form values. These rely on the "name" attributes
//     var title = req.body.title;
//     var desc = req.body.desc;
//     var link = req.body.link;
    
//     var currentTime = new Date();

//     var time = currentTime.getTime();
    	

//   	    var user = req.body.user;

//     // Submit to the DB
//     userCollection.insert({
//         "title" : title,
//         "desc" :desc,
//         "link"	:link,
//         "time"	:time,
//         "id":user}, function (err, doc) {
//         if (err) {
//             // If it failed, return error
//             res.send("There was a problem adding the information to the database.");
//         }
//         else {
//             // And forward to success page
//             res.redirect('/');
//         }
//     });

// });

// router.get('/postlist', function(req, res) {
//     var db = req.db;
//     var cursor = db.collection('post').find();
//     var data;
//     var postCollection = db.collection('post');

// MongoClient.connect(url, function(err, db) {
//     cursor.each(function(err, doc) {
      
//          console.log(doc);
//       //    res.render('posts', {
//       // "xyz" : doc
//         });


//     postCollection.find({},{},function(e,docs){
//       console.log("///")
//         res.render('posts',{
//           "posts" : cursor
//         });
//     });

    
// }); 
// });

// router.get('/posts', function(req, res, next) {
//   res.render('posts', { title: 'Posts' });
// });

// router.post('/login', function(req,res){
// console.log("fhfdghd")
//  var db = req.db;
//     // Set our collection
//    var userCollection = db.collection('user');
//     // Get our form values. These rely on the "name" attributes
//     console.log("BODY", req.body)

//     var uname = req.body.id;
//     var password = req.body.password;
//     // var query = {"id": index, "password": password}
//      userCollection.findOne({id:uname}, function(err, doc){

//       bcrypt.compare(req.body.password,doc.password, function(err,result){

//         if(err){

//           console.log("error in comparing password")
//         }

//         else if(result==1){

//             res.redirect('/');
//         }

//       })
// // console.log("USER",doc);

//     //   if(err) {throw new Error(err);}
//     //   else if(!user){ 
//     //     console.log('Not found');
//     // }




//      //  else{ 

//      //  	sses=req.session;
//      //  	sses.user=req.body.name;

//      //    console.log('Found!');
//     	// res.end('done');
//     	// res.redirect('/');
//     	// }
//   });
//    });





// router.post('/adduser', async (req, res)=> {

//     // Set our internal DB variable
//     var db = req.db;

//     var hashedpassword= await bcrypt.hash(req.body.password,10);



//     // Set our collection
//    var userCollection = db.collection('user');
//     // Get our form values. These rely on the "name" attributes
//     var id = req.body.name;
//     var password = req.body.password;


// console.log("HI",id,hashedpassword);
//     // Submit to the DB
//     userCollection.insert({
//         "id" : id,
//         "password" :hashedpassword }, function (err, doc) {
//         if (err) {
//             // If it failed, return error
//             res.send("There was a problem adding the information to the database.");
//         }
//         else {
//             // And forward to success page
//             res.redirect('/');
//         }
//     });

// });





module.exports = router;
