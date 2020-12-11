var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User     = require("../models/user.js")
router.get("/", function(req,res){
	res.render("campground/landing")
});

//Auth Routes
router.get("/register", function(req,res){
	res.render("register")
});
 router.post("/register", function(req,res){
	 var newUser = new User({username: req.body.username});
	 User.register(newUser, req.body.password, function(err, user){
		 if(err){
			 return res.render("register", {"error": err.message});
		 }else{
			 passport.authenticate("local")(req,res, function(){
				 req.flash("success", "You have successfully created " + user.username);
				res.redirect("/campgrounds"); 
			 });
		 }
	 });
 });
router.get("/login", function(req,res){
	res.render("login");
});

router.post("/login", passport.authenticate("local",{
	successRedirect: "/campgrounds",
	failureRedirect: "/login"
}) ,function(req,res){
	
});
router.get("/logout", function(req,res){
	req.logout();
	req.flash("success", "You Logged Out")
	res.redirect("/campgrounds");
});
module.exports = router;