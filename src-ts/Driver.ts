import {Car} from './vehicles/Car';

class Driver {
  static main() {
    var car = new Car('ABC', 3);
    car.honk();
    car.shiftUp();
  }
}

Driver.main();
