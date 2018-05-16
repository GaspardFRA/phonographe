'use strict';

angular.
    module('phonograph', ['ngRoute', 'phonographService']).
    component('phonograph', {
        templateUrl: 'phonograph/phonograph.template.html',
        controller: ['$routeParams', 'PhonographService',
            function PhonographController($routeParams, PhonographService) {
                var self = this;
                self.order = 'name';
                self.phonograph = PhonographService.get($routeParams.phonographId);
            }
        ]
    });