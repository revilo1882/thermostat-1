describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function() {
    it('starts at 20 degrees ', function() {
      expect(thermostat.temperature).toBe(20);
    });
    it('can be increased with up function', function() {
      thermostat.up();
      expect(thermostat.temperature).toBe(21);
    });
  });
});
