export class Car {
  licensePlate: string;
  gears: number;
  currentGear: number;

  constructor(licensePlate, gears) {
    this.licensePlate = licensePlate;
    this.gears = gears;
    this.currentGear = 1;
  }

  honk() {
    console.log(`Car ${this.licensePlate} honking`);
  }

  shiftUp() {
    if (this.currentGear < this.gears) {
      this.currentGear += 1;
    }
  }

  shiftDown() {
    if (this.currentGear > 1) {
      this.currentGear -= 1;
    }
  }
}
