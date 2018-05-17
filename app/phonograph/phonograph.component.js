'use strict';

angular.
    module('phonograph', ['ngRoute', 'phonographService']).
    component('phonograph', {
        templateUrl: 'phonograph/phonograph.template.html',
        controller: ['$location', '$routeParams', 'PhonographService',
            function PhonographController($location, $routeParams, PhonographService) {
                var self = this;
                self.order = 'name';
                self.phonograph = PhonographService.get($routeParams.phonographId);
                // In case there is no corresponding Phonograph, redirect to join
                if (self.phonograph === undefined) {
                    $location.path('/join')
                }
            }
        ]
    });