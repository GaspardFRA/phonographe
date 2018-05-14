'use strict';

angular.
    module('phonograph', ['ngRoute']).
    component('phonograph', {
        templateUrl: 'phonograph/phonograph.template.html',
        controller: ['$routeParams',
            function PhonographController($routeParams) {
                var self = this;
                self.phonographs = [
                    {
                        id: '123',
                        name: 'WOLOLO',
                        songs: [
                            {name:'ABC'}, {name:'Express Yourself'}
                        ]
                    }
                ]
                self.phonographId = $routeParams.phonographId;
                self.phonograph = self.phonographs.find(item => item.id === self.phonographId);
                // self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
                //   self.setImage(phone.images[0]);
                // });
            }
        ]
    });