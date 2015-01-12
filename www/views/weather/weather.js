angular.module('App')
.controller('WeatherController', function ($scope, $http, $stateParams, Settings) {
  $scope.params = $stateParams;
  $scope.settings = Settings;

  $http.get('/api/forecast/' + $stateParams.lat + ',' + $stateParams.lng, {params: {units: Settings.units}}).success(function (forecast) {
    $scope.forecast = forecast;
  });
});
