

$(document).ready(function() {

//name = string, calories = number, glutenFree = boolean, glutenFree = boolean
function FoodItem(name, calories, vegan, glutenFree, citrusFree) {
	 this.name = name;
	 this.calories = calories;
	 this.vegan = vegan;
	 this.glutenFree = glutenFree;
	 this.citrusFree = citrusFree;
	 
	 this.create = function() {
	 	return $(".foods").append('<li> Food Items: '+this.name+'</li>');
	 }
	 

	 }
	 FoodItem.prototype.toString = function() {
	 	return (this.name + this.calories +this.vegan+this.glutenFree + this.citrusFree);
	 } 


var tortilla = new FoodItem("tortilla",20,true,false,true);
var beans = new FoodItem("beans",20,true,true,true);
var cheese = new FoodItem("cheese",50,false,true,true);
var avocado = new FoodItem("avocado",100,true,true,true);
var lime = new FoodItem("lime",10,true,true,false);
var cornchips = new FoodItem("corn chips",70,true,true,true);
var tequila = new FoodItem("tequila",20,true,true,true);

//Part II

//name = string, description = string, items = array of FoodItems
function Drink(name, description,items) {
	this.name = name;
	this.description = description;
	this.items = items;
	this.create = function() {
	 	return $(".drinks").append('<li>'+this.name+'</li>');
	 }
}

	Drink.prototype.toString = function() {
//		var stringOut = "name: " + this.name +", description: "+ this.description+"\n Items: \n  ";
//		for(var i = 0;i<this.items.length;i++) {
//			stringOut = stringOut + this.items[i].toString() + "\n  "; 
//		}
		return(this.name +"<p>"+ this.description +"<p>" +this.items+ "<p>")	
//		return stringOut;
	}
var margarita = new Drink("Margarita","The classic summer drink",[lime,tequila]);

//name = string, description = string, price = number, items = array of FoodItems
function Plate(name, description, price, items) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.items = items;
	this.isVegan = function() {
		console.log("isVegan",items);
		for(var i = 0;i<items.length;i++) {
			console.log(items[i]);
			if (items[i].vegan === false) {
				console.log("NOOO, DAIRY!");
				return false
			} 
		} console.log("Yay,vegan!");
			return true;
			
	}

	this.isGlutenFree = function() {
		for (var i = 0; i<items.length;i++) {
			if (items[i].glutenFree === false) {
				console.log("NOOO, GLUTEN!")
				return false
			}
		} console.log("gluten free!");
			return true;
	}

	this.isCitrusFree = function() {
		for (var i = 0; i<items.length;i++) {
			if (items[i].citrusFree === false) {
				console.log("NOOO, CITRUS!")
				return false
			}
		} console.log("citrus free!");
			return true;
	}
	this.create = function() {
	 	return $(".plates").append('<li>Plates: '+this.name+'</li>');
	 }


}
	Plate.prototype.toString = function() {
		return(this.name +'<p>'+ this.description + '<p>' +this.price+ '<p> includes:'+this.items+'<p>');
	}

var burritoPlate = new Plate("Burrito", "Super awesome!", 7, [tortilla,beans,cheese,cornchips]);
var guacamolePlate = new Plate("Guacamole Plate","Who doesn't love avocados. Seriously.", 5, [avocado,lime,cornchips]);

//plates = Array of plate objects - menu has some of the plates! Menu has ALL of the plates.
function Menu(plates) { //could add a drinks parameter to pass and array of drink objects
	this.name = name;
	this.plates = plates;

	this.create = function() {
		return $(".menu").append('<li>'+this.plates+'</li>');
	}
}
	Menu.prototype.toString = function() {
		return(this.name + this.plates);
	}

//plates = Array of plates?
function Order(plates) {
	this.plates = plates;

	this.create = function() {
	 	return $(".order").append('<li>"Order: "'+this.plates+'</li>');
	 }
}
	Order.prototype.toString = function() {
		return(this.plates);
	}

	
//var eatMe = new Menu([burritoPlate, guacamolePlate]);
var eatMe = new Menu([guacamolePlate, burritoPlate, margarita]);

//name = string, description = string, menu = array of plates 
function Restaurant(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
	this.create = function() {
	 	return $(".container").prepend('<h1>'+this.name+'</h1><div class = "description">'+ this.description+'</div>');
	 }


}	
	Restaurant.prototype.toString = function() {
		return(this.name +"<p>"+ this.description + "<p>" +this.menu)
	}

var LittleT = new Restaurant("Little Tijuana", "Not a big menu, but it's cheap!",eatMe);

//dietaryPreference = types?
function Customer(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
}
	Customer.prototype.toString = function() {
		return("Dietary Preference: " + this.dietaryPreference);
	}


LittleT.create();
eatMe.create();
// console.log(LittleT.toString());
// lime.create();
// margarita.create();
// burritoPlate.create();



}); //closes document ready