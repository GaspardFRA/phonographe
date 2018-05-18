'use strict';

angular.
  module('phonographService', []).
  factory('PhonographService', ['$http',
    function ($http) {
      var phonographFactory = {};

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

