'use strict';

angular
    .module('joinPhonograph', ['ngRoute', 'phonographService'])
    .component('joinPhonograph', {
        templateUrl: 'join-phonograph/join-phonograph.template.html',
        controller: ['$location', '$log', '$mdToast', 'PhonographService',
            function JoinPhonographController($location, $log, $mdToast, PhonographService) {
                var self = this;

                self.phonographId = '';

                PhonographService.query()
                    .then(response => {
                        self.phonographs = response.data;
                        $log.debug(self.phonographs);
                    })
                    .catch(response => {
                        console.error('Error ' + response.status + ' : ' + response.data);
                    });

                self.submit = function () {
                    PhonographService.get(self.phonographId)
                        .then(response => {
                            $log.debug('joinComponent::getPhonograph:' + self.phonographId);
                            $location.path('/phonographs/' + self.phonographId);
                        })
                        .catch(response => {
                            $log.debug('joinComponent::getPhonograph:Error' + response.status + ':' + response.data);
                            self.showErrorMessage("Phonograph not found");
                        });
                };

                self.showErrorMessage = function (message) {
                    $log.debug('joinComponent::showErrorMessage(' + message + ' )');
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent(message)
                            .position('bottom')
                            .hideDelay(2000)
                    );
                };
            }
        ]
    });