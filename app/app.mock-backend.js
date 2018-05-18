'use strict'
// MockBackend for front-development
angular.
    module('phonographeApp').
    run(['$httpBackend', '$log', '$filter', function ($httpBackend, $log, $filter) {
        var self = this;
        var phonographs = [
            {
                id: '123',
                name: 'WOLOLO',
                songs: [
                    { name: 'Express Yourself', author: 'Charles Wright & The Watts' },
                    { name: 'ABC', author: 'Jackson 5' }
                ]
            },
            {
                id: '456',
                name: 'Earth is flat',
                songs: [
                    { name: 'Express Yourself', author: 'Charles Wright & The Watts' },
                    { name: 'ABC', author: 'Jackson 5' },
                    { name: 'I want you back', author: 'Jackson 5' }
                ]
            }
        ];

        $httpBackend.whenGET('/phonographs').respond(function (method, url, data) {
            $log.debug("MockBackend::getPhonographs");
            return [200, phonographs, {}];
        });

        $httpBackend.whenGET(/\/phonographs\/\d+/).respond(function (method, url, data) {
            var phonographId = url.split('/')[2];
            $log.debug("MockBackend::getPhonographId:" + phonographId);
            var phonograph = $filter('filter')(phonographs, { id: phonographId }, true)[0];//phonographs.find(function(item) { item.id === phonographId });

            // Return empty if no corresponding phonograph
            if (phonograph === undefined) {
                return [404, {}, {}];
            }
            return [200, phonograph, {}];
        });

        $httpBackend.whenGET(/join-phonograph\//).passThrough();
        $httpBackend.whenGET(/home\//).passThrough();
        $httpBackend.whenGET(/create-phonograph\//).passThrough();
        $httpBackend.whenGET(/phonograph\//).passThrough();
    }]);