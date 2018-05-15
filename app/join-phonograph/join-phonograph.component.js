'use strict';

angular
    .module('joinPhonograph', ['ngRoute'])
    .component('joinPhonograph', {
        templateUrl: 'join-phonograph/join-phonograph.template.html',
        controller: function JoinPhonographController($location) {
            var self = this;
            self.serverError = '';
            self.phonographId = '';
            self.phonographs = [
                {
                    id: '123',
                    name: 'WOLOLO'
                }
            ];
            self.submit = function () {
                // TBD : Mock services here, change validation
                if (self.phonographs.find(item => item.id === self.phonographId) === undefined) {
                    self.serverError = 'notfound';
                }
                else {
                    $location.path('/'+self.phonographId)
                }
            };
        }
    });