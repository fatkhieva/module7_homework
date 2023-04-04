function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }


  ElectricalAppliance.prototype.switchOn = function() {
    this.isPluggedIn = true;
    console.log(this.name + ' is now plugged in.');
  }
  
  ElectricalAppliance.prototype.switchOff = function() {
    this.isPluggedIn = false;
    console.log(this.name + ' is now unplugged.');
  }


  function Printer (name, power, type) {
    ElectricalAppliance.call(this, name, power);
    this.type = type;
  }
  
  Printer.prototype = Object.create(ElectricalAppliance.prototype);
  Printer.prototype.constructor = Printer;


  function Computer(name, power, brand) {
    ElectricalAppliance.call(this, name, power);
    this.brand = brand;
  }
  
  Computer.prototype = Object.create(ElectricalAppliance.prototype);
  Computer.prototype.constructor = Computer;


const printer = new Printer ("Printer", 200, "Laser");
const computer = new Computer("Notebook", 400, "Acer");

printer.switchOn(); 
computer.switchOn()


function calculateTotalPower(appliances) {
    let totalPower = 0;
    for (let i = 0; i < appliances.length; i++) {
      if (appliances[i].isPluggedIn) {
        totalPower += appliances[i].power;
      }
    }
    return totalPower;
  }

  console.log(calculateTotalPower([printer, computer]));
  


