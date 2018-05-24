'use strict';

angular.
    module('createPhonograph', ['ngRoute', 'phonographService']).
    component('createPhonograph', {
        templateUrl: 'create-phonograph/create-phonograph.template.html',
        controller: ['$location', '$log', 'PhonographService',
            function CreatePhonographController($location, $log, PhonographService) {
                self = this;
                self.phonographName = '';

                self.submit = function () {
                    $log.debug('createComponent::Submit');
                    PhonographService.post(self.phonographName)
                        .then(response => {
                            $log.debug('createComponent::PostPhonograph:' + self.phonographName);
                            $location.path('/phonographs/' + response.data.id);
                        })
                        .catch(response => {
                            $log.debug('createComponent::PostPhonograph:Error' + response.status + ':' + response.data);
                        });
                };
            }
        ]
    });