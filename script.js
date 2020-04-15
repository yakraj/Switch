//this syntax is very useful for multiple condition.
//first i'll show you single exemple

var name = "yakraj";
function runSwitch(){
	var myname;
	switch (name) {
		case "yakraj": myname = "hello"+" "+name;
		break;
		default: myname = "i don't know you";
	}
	return myname;
}

//run this function

//here i'm going to use multiple variation and condition.

//here i'm going to create some name variables 
//you can assume anything 
var name = "yakraj";
var name = "zajir";
var name = "john";
var name = "josua";
var name = "peter";


//the main function is this
function runSwitch(){
	var myname;
	switch (name) {
		case "yakraj": myname = "hello"+" "+name+" I like you man.";
		break;
		case "zajir": myname = "hello"+" "+name+", tell me something new about you.";
		break;
		case "john": myname = "hello"+" "+name+", how do you doing";
		break;
		case "josua": myname = "hello"+" "+name+", How your days are going.";
		break;
		case "peter": myname = "hello"+" "+name+", What you think yourself a king.";
		break;
		default: myname = "hey wait.!!!! .....i don't know you, who are you???";
	}
	return myname;
}
runSwitch();
//run this function

//Ok here for you, if i'll do it with if else.
var name = "yakraj";

function getName() {
	if (name == "yakraj"){
		return "hello"+" "+name+" I like you man.";
	} else if (name == "zajir") {
		return "hello"+" "+name+", tell me something new about you.";
	} else if (name == "john") {
		return "hello"+" "+name+", how do you doing";
	} else if (name == "josua") {
		return "hello"+" "+name+", How your days are going.";
	} else if (name == "peter") {
		return "hello"+" "+name+", What you think yourself a king.";
	} else {
		return "hey wait.!!!! .....i don't know you, who are you???";
	}
}
getName();
// run this function
// here you can see what is different between theese, and which is more cleaner code.
