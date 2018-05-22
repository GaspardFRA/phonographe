'use strict';

describe('phonographeApp.version module', function() {
  beforeEach(module('phonographeApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.2.0');
    }));
  });
});
