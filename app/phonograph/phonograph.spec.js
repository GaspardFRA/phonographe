'use strict';

describe('phonograph', function() {

  beforeEach(module('phonograph'));

  describe('phonographController', function(){
    
    it('should always have controller', inject(function($componentController) {
        var ctrl = $componentController('phonograph');
        expect(ctrl).toBeDefined();
    }));

  });
});