'use strict';

angular
    .module('joinPhonograph', ['ngRoute'])
    .component('joinPhonograph', {
        templateUrl: 'join-phonograph/join-phonograph.template.html',
        controller: function JoinPhonographController() {
            var self = this;
            self.phonographs = [
                {
                    id: '123',
                    name: 'WOLOLO'
                }
            ];
        }
    });