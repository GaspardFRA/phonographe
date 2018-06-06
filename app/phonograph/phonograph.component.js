'use strict';

angular.
    module('phonograph', ['ngRoute', 'phonographService', 'ngMaterial']).
    component('phonograph', {
        templateUrl: 'phonograph/phonograph.template.html',
        controller: ['$location', '$routeParams', '$log','$mdSidenav', 'PhonographService', 
            function PhonographController($location, $routeParams, $log, $mdSidenav, PhonographService) {
                var self = this;
                self.order = 'name';
                PhonographService.get($routeParams.phonographId)
                    .then(response => {
                        self.phonograph = response.data
                        $log.debug("phonographComponent::getPhonograph" + $routeParams.phonographId + ", return: " + response.data);
                    })
                    .catch(response => {
                        $location.path('/join')
                    });
                $mdSidenav('left')
                    .toggle()
                    .then(function () {
                        $log.debug('toggled');
                    });
            }
        ]
    });