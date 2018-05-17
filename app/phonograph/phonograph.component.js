'use strict';

angular.
    module('phonograph', ['ngRoute', 'phonographService']).
    component('phonograph', {
        templateUrl: 'phonograph/phonograph.template.html',
        controller: ['$location', '$routeParams', '$log', 'PhonographService',
            function PhonographController($location, $routeParams, $log, PhonographService) {
                var self = this;
                self.order = 'name';
                PhonographService.get($routeParams.phonographId)
                    .then(response => {
                        self.phonograph = response.data
                        $log.debug("phonographComponent::getPhonograph" + $routeParams.phonographId + ", return: " + response.data);
                    });

            }
        ]
    });