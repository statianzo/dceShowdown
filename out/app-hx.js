(function (console) { "use strict";
var Driver = function() { };
Driver.main = function() {
	var car = new vehicles_Car("ABC",3);
	car.honk();
};
var vehicles_Car = function(licensePlate,gears) {
	this.licensePlate = licensePlate;
	this.gears = gears;
	this.currentGear = 1;
};
vehicles_Car.prototype = {
	honk: function() {
		console.log("Car " + this.licensePlate + " honking");
	}
};
Driver.main();
})(typeof console != "undefined" ? console : {log:function(){}});
