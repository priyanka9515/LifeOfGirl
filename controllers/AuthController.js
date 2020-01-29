var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/user.js");
var bcrypt = require("bcrypt");
var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  res.render("index", { user: req.user });
};

// Go to registration page
userController.register = function(req, res) {
  res.render("signup");
};







userController.doRegister = function (req, res) {
  var db = req.db;
  // console.log("db ----> ", db)
var data = req.body;
// hashingpass(req);
  var userCollection = db.collection("user");

  console.log(".//./././././././././.",data.username,data.id,data.password)


  var data = req.body;



console.log("////////////////////////",req.password);
  console.log(data);
  var hashedpassword;

 bcrypt.hash(data.password, 10, function(err, hash) {
          if (err) {
            console.log("Error in hashing")
          };

          console.log("%%%%%%%%%%%%%%%%%%%%%%%%",hash);
          // override the cleartext password with the hashed one
       hashedpassword=hash;
          // data.password=hashedpassword;
  console.log("------", data.id, data.password);

  User.register(new User({ username: data.username, name:data.name }), data.password, function(
    err,
    user
  ) {
    if (err) {
      console.log(err);
      return res.render("index", user);
    }
    console.log("!@!@!@!@@@@@@@@@@@@@@@",user);
    console.log("lklklklkl", req.body.id, req.body.password);
    res.redirect('http://localhost:3001/Signin');
  });

      });

 
};


// Go to login page
userController.login = function(req, res) {
  res.render("signin");
};


// Post login


userController.doLogin = function(req, res) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { console.log("KLKLKL",err); }
    if (!user) {
      console.log('djfsdjfgjsdjfsjdkf');
      return res.redirect('http://localhost:3001/Signup'); }

    // req / res held in closure
    req.logIn(user, function(err) {
      if (err) { return 0; }
      return res.redirect('http://localhost:3001/');
    });

  })(req, res);

};
// userController.doLogin = function(req, res) {
//   var db = req.db;
//   // console.log("DB --------> ", db);
//   // Set our collection
//   var userCollection = db.collection("user");
//   // Get our form values. These rely on the "name" attributes
//   // console.log("BODY", req.body);

//   var uname = req.body.id;
//   var password = req.body.password;
 
//   console.log("33333333", req.body.username, req.body.id, req.body.password);
//   passport.authenticate('local', function(err, user, info) {
//     console.log("KOKOKOKPKPKP",user);
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('www.google.com'); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.redirect('/users/' + user.username);
//     });
//   })(req, res);
// };

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect("/");
};

module.exports = userController;


