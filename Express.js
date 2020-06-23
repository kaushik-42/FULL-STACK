var express=require("express");
var app=express();
//lets define these routes and create these 
// so when we click on '/' it says hi there and '/dog' it //says meom
// '/'==hi there
// '/bye'==goodbye
//'/dog'==meom
app.get("/",function(request,response){
	//request is an object that has info of thereq and res //contains all the info we respond with
	response.send("Hi there");
});
app.get("/bye",function(request,response){
	//request is an object that has info of thereq and res //contains all the info we respond with
	response.send("Good bye!");
});
app.get("/dog",function(request,response){
	//request is an object that has info of thereq and res //contains all the info we respond with
	console.log("someone posts a get request");
	response.send("Meow");
});
app.get("/r/:subRedditName",function(request,response){
	//request is an object that has info of thereq and res //contains all the info we respond with
	console.log("someone posts a get request");
	response.send("Welcome to subreddit");
});
//After this we tell express to listen for requests(start //server)
//when the route is not found for all the other routes we can 
//keep a * symbol so that we can get to this route!
app.get("*",function(request,response){
	//request is an object that has info of thereq and res //contains all the info we respond with
	console.log("someone posts a get request");
	response.send("You are a star");
});
app.listen(3000,function(){
	console.log("server listening to port 3000");
});
