define("vehicles/Car", ["require", "exports"], function (require, exports) {
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
            if (this.currentGear > 1) {
                this.currentGear -= 1;
            }
        };
        return Car;
    }());
    exports.Car = Car;
});
define("Driver", ["require", "exports", "vehicles/Car"], function (require, exports, Car_1) {
    "use strict";
    var Driver = (function () {
        function Driver() {
        }
        Driver.main = function () {
            var car = new Car_1.Car('ABC', 3);
            car.honk();
            car.shiftUp();
        };
        return Driver;
    }());
    Driver.main();
});
