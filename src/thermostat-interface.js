$(document).ready(function() {
  var thermostat = new Thermostat();
  updateView();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateView();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateView();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateView();
  });

  $('#power-saving').click(function() {
    thermostat.togglePowerSaving();
    console.log(thermostat.powerSavingIsOn);
    updateView();
  });

  $('#power-usage').click(function() {
    console.log(thermostat.energyUsage());
  });

  function updateView() {
    $('#display-temperature').text(thermostat.temperature);
  }
});
