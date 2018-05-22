'use strict';

describe('joinPhonograph', function() {

  beforeEach(module('joinPhonograph'));

  describe('joinPhonographController', function(){
    
    it('should always have controller', inject(function($componentController) {
        var ctrl = $componentController('joinPhonograph');
        expect(ctrl).toBeDefined();
    }));

  });
});