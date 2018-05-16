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
    it('cannot go above 32 degrees', function() {
      thermostat.powerSavingIsOn = false;
      thermostat.temperature = 32;
      thermostat.up();
      expect(thermostat.temperature).toBe(32);
    });
  });

  describe('has a power saving mode', function() {
    it('that is on by default', function() {
      expect(thermostat.powerSavingIsOn).toBeTruthy();
    });

    it('that can be turned off', function() {
      thermostat.turnPowerSavingOff();
      expect(thermostat.powerSavingIsOn).toBeFalsy();
    });

    it('that can be turned on', function() {
      thermostat.turnPowerSavingOff();
      thermostat.turnPowerSavingOn();
      expect(thermostat.powerSavingIsOn).toBeTruthy();
    });

    it('that limits maximum temperature to 25 degrees', function() {
      thermostat.temperature = 25;
      thermostat.up();
      expect(thermostat.temperature).toBe(25);
    });

    it('that sets temperature to 25 if currently over 25', function() {
      thermostat.turnPowerSavingOff();
      thermostat.temperature = 32;
      thermostat.turnPowerSavingOn();
      expect(thermostat.temperature).toBe(25);
    });
  });

  describe('#reset', function() {
    it('resets temperature to 20', function() {
      thermostat.temperature = 23;
      thermostat.reset();
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe('energy useage', function() {
    it('displays "low-usage" when temperature less than 18', function() {
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
    it('displays "medium-usage" when temperature above 17 and below 25', function() {
      thermostat.temperature = 24;
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
    it('displays "high-usage" when temperature 25 or above', function() {
      thermostat.temperature = 25;
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
