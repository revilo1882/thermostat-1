var Thermostat = function() {
  this.temperature = 20;
  this.powerSavingIsOn = true;
};

Thermostat.prototype.up = function() {
  if (!this.powerSavingIsOn && this.temperature < 32) {
    this.temperature += 1;
  } else if (this.powerSavingIsOn && this.temperature < 25) {
    this.temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature -= 1;
  }
};
