var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");
// we don't have cat_app so it will create one

var catSchema=new mongoose.Schema({
	//this is defining a pattern for our data
	name:String,
	age:Number,
	temperament:String
});

var Cat=mongoose.model("cat",catSchema);
//Adding new cats to the db
//Below is step 1:
var greoge=new Cat({
	name:"BOW",
	age:12,
	temperament:"Labrador"
});
//Below is step 2:
greoge.save(function(err,cat){
	if(err){
		console.log("something went wrong!");
	}
	else{
		console.log("New cat added to the Db");
		console.log(cat);
	}
});
//Instead of step 1 and step 2:
Cat.create({
	name:"snow",
	age:15,
	temperament:"bland"
},function(err,cat){
	if(err){
		console.log(err);
	}
	else{
		console.log(cat);
	}
});

//Retrieve all the cats from the DB and console.log each one
Cat.find({},function(err,cats){
	if(err){
		console.log("something went wrong!");
		console.log(err);
		
	}
	else{
		console.log("All the cats");
		console.log(cats);
	}
})
