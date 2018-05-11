'use strict';

angular.module('phonographeApp').
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  when('/home', {
    template: '<home></home>'
  }).
  when('/view1', {
    template: '<view1></view1>'
  }).
  when('/view2', {
    template: '<view2></view2>'
  }).
  otherwise('/home');

}]);