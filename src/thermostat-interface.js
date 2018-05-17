$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature-up').click(function() {
    thermostat.up();
    console.log(thermostat.temperature);
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    console.log(thermostat.temperature);
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    console.log(thermostat.temperature);
  });

  $('#power-saving').click(function() {
    thermostat.togglePowerSaving();
    console.log(thermostat.powerSavingIsOn);
    console.log(thermostat.temperature);
  });

  $('#power-usage').click(function() {
    console.log(thermostat.energyUsage());
  });
});
