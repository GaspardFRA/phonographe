'use strict';

angular
    .module('joinPhonograph', ['ngRoute', 'phonographService'])
    .component('joinPhonograph', {
        templateUrl: 'join-phonograph/join-phonograph.template.html',
        controller: ['$location', 'PhonographService',
            function JoinPhonographController($location, PhonographService) {
                var self = this;

                self.phonographId = '';

                self.submit = function () {
                    if (PhonographService.get(self.phonographId) === undefined) {
                        // TODO : Send Error message, ngmessage
                    }
                    else {
                        $location.path('/' + self.phonographId)
                    }
                };
            }
        ]
    });