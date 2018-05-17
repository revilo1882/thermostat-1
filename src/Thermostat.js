'use strict';

var Thermostat = function() {
  const MIN_TEMP = 10;
  const MAX_TEMP = 32;
  const MAX_PS_TEMP = 25;
  this.minTemp = MIN_TEMP;
  this.maxTemp = MAX_TEMP;
  this.maxPSTemp = MAX_PS_TEMP;
  this.temperature = 20;
  this.powerSavingIsOn = true;
};

Thermostat.prototype.togglePowerSaving = function() {
  this.powerSavingIsOn = !this.powerSavingIsOn;
  if (this.powerSavingIsOn && this.temperature > this.maxPSTemp) {
    this.temperature = this.maxPSTemp;
  }
};

Thermostat.prototype.up = function() {
  if (
    (!this.powerSavingIsOn && this.temperature < this.maxTemp) ||
    (this.powerSavingIsOn && this.temperature < this.maxPSTemp)
  ) {
    this.temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > this.minTemp) {
    this.temperature -= 1;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return 'low-usage';
  } else if (this.temperature < this.maxPSTemp) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
