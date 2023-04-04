class ElectricalAppliance {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.pluggedIn = false;
    }
  
    switchOn() {
      this.pluggedIn = true;
      console.log(`${this.name} is now plugged in.`);
    }
  
    switchOff() {
      this.pluggedIn = false;
      console.log(`${this.name} is now unplugged.`);
    }
  }
  
  class Printer extends ElectricalAppliance {
    constructor(name, power, type) {
      super(name, power);
      this.type = type;
    }
  }
  
  class Computer extends ElectricalAppliance {
    constructor(name, power, brand) {
      super(name, power);
      this.brand = brand;
    }
  }
  
  const printer = new Printer("Printer", 200, "Laser");
  const computer = new Computer("Notebook", 400, "Acer");
  
  printer.switchOn();
  computer.switchOn();
  
  function calculateTotalPower(appliances) {
    let totalPower = 0;
    for (let i = 0; i < appliances.length; i++) {
      if (appliances[i].pluggedIn) {
        totalPower += appliances[i].power;
      }
    }
    return totalPower;
  }
  
  console.log(calculateTotalPower([printer, computer]));