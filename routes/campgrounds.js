var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground.js");
var middleware = require("../middleware");

router.get("/", function(req,res){
	Campground.find({}, function(err,allCampgrounds){
		if(err){
			console.log(err);
		} else{
			res.render("campground/index", {campgrounds:allCampgrounds});
		}
	})
});
router.post("/", middleware.isLoggedIn, function(req,res){
		var name = req.body.name;
		var price = req.body.price;
		var image = req.body.image;
		var desc = req.body.description;
		var author = {
			id: req.user._id,
			username: req.user.username
		};
		var newCampground = {name:name, image:image, description:desc, author:author, price:price};
		Campground.create(newCampground, function(err,newlyCreated){
			if(err){
				console.log(err);
			}else{
				res.redirect("/campgrounds");
			}
		});
		
});
router.get("/new",middleware.isLoggedIn, function(req,res){
	res.render("campground/new")
});
router.get("/:id" , function(req,res){
	Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
		if(err){
			console.log(err);
		} else{
			res.render("campground/show", {campground: foundCampground});
		}
	});
});
router.get("/:id/edit",middleware.checkCampgroundOwnership, function(req,res){
		Campground.findById(req.params.id, function(err,foundCampground){
				res.render("campground/edit", {campground: foundCampground});
})});

router.put("/:id",middleware.checkCampgroundOwnership, function(req,res){
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err,updatedCampground){
		if(err){
			res.redirect("/campgrounds");
		}else{
			res.redirect("/campgrounds/" + req.params.id)
		}
	});
});
router.delete("/:id",middleware.checkCampgroundOwnership, function(req,res){
	Campground.findByIdAndRemove(req.params.id, function(err,deletedCampground){
		if(err){
			console.log(err);
			res.redirect("/campgrounds/" + req.params.id);
		} else{
			res.redirect("/campgrounds")
		}
	});
	
});	
module.exports = router;