'use strict';

describe('home', function() {

  beforeEach(module('home'));

  describe('homeController', function(){

    it('should always have controller', inject(function($componentController) {
        var ctrl = $componentController('home');
        expect(ctrl).toBeDefined();
    }));

  });
});