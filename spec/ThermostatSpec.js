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
    it('can be decreased with down function', function() {
      thermostat.down();
      expect(thermostat.temperature).toBe(19);
    });
    it('cannot go below 10 degrees', function() {
      thermostat.temperature = 10;
      thermostat.down();
      expect(thermostat.temperature).toBe(10);
    });
  });

  describe('has a power saving mode', function() {
    it('that is on by default', function() {
      expect(thermostat.powerSavingIsOn).toBeTruthy();
    });
  });
});
