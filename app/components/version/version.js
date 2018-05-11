'use strict';

angular.module('phonographeApp.version', [
  'phonographeApp.version.interpolate-filter',
  'phonographeApp.version.version-directive'
])

.value('version', '0.1.0');
