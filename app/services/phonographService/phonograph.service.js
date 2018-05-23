'use strict';

angular.
  module('phonographService', []).
  factory('PhonographService', ['$http',
    function ($http) {
      var phonographFactory = {};

      phonographFactory.query = function () {
        return $http.get('/phonographs');
      };

      phonographFactory.post = function (name) {
        return $http.post('/phonographs', name);
      };

      phonographFactory.get = function (id) {
        return $http.get('/phonographs/' + id);
      };

      phonographFactory.toast = function () {
        return "toast";
      }

      return phonographFactory;
    }]);

