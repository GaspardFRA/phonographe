'use strict';

angular.
  module('phonographService', []).
  factory('PhonographService', ['$http', function ($http) {

    var phonographFactory = {};

    // TBD : Call to real back-end to retrieve list of phonograph
    phonographFactory.phonographs = [
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

    phonographFactory.query = function () {
      return $http.get('/phonographs');
    };

    phonographFactory.get = function (id) {
      return $http.get('/phonographs/' + id);
    };

    phonographFactory.toast = function () {
      return "toast";
    }

    return phonographFactory;
  }]);

