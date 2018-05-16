var Thermostat = function() {
  this.temperature = 20;
  this.powerSavingIsOn = true;
};

Thermostat.prototype.turnPowerSavingOff = function() {
  this.powerSavingIsOn = false;
};

Thermostat.prototype.turnPowerSavingOn = function() {
  this.powerSavingIsOn = true;
}

Thermostat.prototype.up = function() {
  if (
    (!this.powerSavingIsOn && this.temperature < 32) ||
    (this.powerSavingIsOn && this.temperature < 25)
  ) {
    this.temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > 10) {
    this.temperature -= 1;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return "low-usage";
  } else if (this.temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};
