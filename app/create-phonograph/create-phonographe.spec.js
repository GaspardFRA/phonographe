'use strict';

describe('createPhonograph', function() {

  beforeEach(module('createPhonograph'));

  describe('createPhonographController', function(){
    
    it('should always have controller', inject(function($componentController) {
        var ctrl = $componentController('createPhonograph');
        expect(ctrl).toBeDefined();
    }));

  });
});