var express       = require("express"),
	app           = express(),
 	bodyParser    = require("body-parser"),
 	mongoose      = require("mongoose"),
	flash         = require("connect-flash"),
	passport      = require("passport"),
	LocalStrategy = require("passport-local"),
	methodOverride= require("method-override"), 
	Campground    = require("./models/campground"),
	Comment       = require("./models/comment"),
	User          = require("./models/user"),
	seedDB        = require("./seeds")

var campgroundRoutes = require("./routes/campgrounds.js"),
    commentsRoutes   = require("./routes/comments.js"),
    authRoutes       = require("./routes/index.js")

//seedDB();
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


app.use(require("express-session")({
	secret: "Gucci has the best dad!",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

app.use(authRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments", commentsRoutes);

// app.get("*", function(req,res){
// 	res.send("oops you ran into some trouble----> error page not found")
// });
app.listen(3000, function(){
	console.log("the yelp app is running on port 3000")
});