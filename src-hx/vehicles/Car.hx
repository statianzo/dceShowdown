package vehicles;

class Car {
  var licensePlate: String;
  var gears: Int;
  var currentGear: Int;

  public function new(licensePlate, gears) {
    this.licensePlate = licensePlate;
    this.gears = gears;
    this.currentGear = 1;
  }

  public function honk() {
    trace('Car ${this.licensePlate} honking');
  }

  public function shiftUp() {
    if (this.currentGear < this.gears) {
      this.currentGear += 1;
    }
  }

  public function shiftDown() {
    if (this.currentGear < this.gears) {
      this.currentGear -= 1;
    }
  }
}
