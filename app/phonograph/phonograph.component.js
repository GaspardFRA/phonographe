'use strict';

angular.
    module('phonograph', ['ngRoute']).
    component('phonograph', {
        templateUrl: 'phonograph/phonograph.template.html',
        controller: ['$routeParams',
            function PhonographController($routeParams) {
                var self = this;
                self.order = 'name';
                self.phonographs = [
                    {
                        id: '123',
                        name: 'WOLOLO',
                        songs: [
                            {name:'Express Yourself', author:'Charles Wright & The Watts'}, {name:'ABC', author:'Jackson 5'}
                        ]
                    }
                ];
                self.phonographId = $routeParams.phonographId;
                self.phonograph = self.phonographs.find(item => item.id === self.phonographId);
                // self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
                //   self.setImage(phone.images[0]);
                // });
            }
        ]
    });