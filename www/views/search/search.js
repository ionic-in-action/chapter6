angular.module('App')
.controller('SearchController', function ($scope, $http) {
  $scope.model = {term: ''};

  $scope.search = function () {
    $http.get('https://maps.googleapis.com/maps/api/geocode/json', {params: {address: $scope.model.term}}).success(function (response) {
      $scope.results = response.results;
    });
  };
});
