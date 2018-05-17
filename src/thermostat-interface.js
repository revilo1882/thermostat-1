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
});
