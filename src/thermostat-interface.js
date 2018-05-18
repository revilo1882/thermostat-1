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
    updateView();
  });

  function updateView() {
    $('#display-temperature').text(thermostat.temperature);
    $('#display-pu').text(thermostat.energyUsage());
    $('#display-eco').text(thermostat.ecoDisplay());
  }
});
