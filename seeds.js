var mongoose   = require("mongoose"),
	Campground = require("./models/campground"),
	Comment    = require("./models/comment")

var data = [
	{
		name: "Clouds Rest",
		image: "https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&h=350",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ultricies velit, sed hendrerit odio. Aenean cursus, erat sed bibendum convallis, tortor tellus placerat sem, sit amet ultrices sem nulla et lectus. In vestibulum aliquet nulla et vulputate. Nullam ut ullamcorper neque, non convallis erat. Aenean rhoncus velit et sem."
	},
	{
		name: "Smokey Bay",
		image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ultricies velit, sed hendrerit odio. Aenean cursus, erat sed bibendum convallis, tortor tellus placerat sem, sit amet ultrices sem nulla et lectus. In vestibulum aliquet nulla et vulputate. Nullam ut ullamcorper neque, non convallis erat. Aenean rhoncus velit et sem."
	},
	{
		name: "Gucci's Hideout",
		image: "https://images.pexels.com/photos/2526025/pexels-photo-2526025.jpeg?auto=compress&cs=tinysrgb&h=350",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ultricies velit, sed hendrerit odio. Aenean cursus, erat sed bibendum convallis, tortor tellus placerat sem, sit amet ultrices sem nulla et lectus. In vestibulum aliquet nulla et vulputate. Nullam ut ullamcorper neque, non convallis erat. Aenean rhoncus velit et sem."
	}
]

function seedDB(){
	//remove all campgrounds
		Campground.remove({}, function(err){
		if(err){
			console.log(err);
		}else{
			console.log("removed campgrounds");	
	// 		//add a few campgrounds
	// 	data.forEach(function(seed){
	// 		Campground.create(seed, function(err,campground){
	// 				if(err){
	// 					console.log(err);
	// 				} else{
	// 					console.log("created a campground");
	// 					//add a few comments
	// 					Comment.create(
	// 						{
	// 							text: "this campground is cool and all i just wish we had internet",
	// 							author: "Homer"
	// 						}, 
	// 							function(err,comment){
	// 								if(err){
	// 									console.log(err);
	// 								}else{
	// 									campground.comments.push(comment);
	// 									campground.save();
	// 									console.log("created a comment")
	// 								}
	// 						});
	// 				}
	// 			});	 
	// 		});
	// 	}
	// });	
}})};
module.exports = seedDB;