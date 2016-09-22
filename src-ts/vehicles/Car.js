"use strict";
var Car = (function () {
    function Car(licensePlate, gears) {
        this.licensePlate = licensePlate;
        this.gears = gears;
        this.currentGear = 1;
    }
    Car.prototype.honk = function () {
        console.log("Car " + this.licensePlate + " honking");
    };
    Car.prototype.shiftUp = function () {
        if (this.currentGear < this.gears) {
            this.currentGear += 1;
        }
    };
    Car.prototype.shiftDown = function () {
        if (this.currentGear < this.gears) {
            this.currentGear += 1;
        }
    };
    return Car;
}());
exports.Car = Car;
