// CONTROLLERS
secondWeather.controller('homeCtrl', ['$scope', 'cityService', function($scope, cityService) {
  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  })

}])

secondWeather.controller('forecastCtrl', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
  $scope.city = cityService.city;
  $scope.days = $routeParams.numOfDays || '2';
  var apiKey = "9432d86b98d17a9ea311ca6f751d6f60";

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.city + ",us&cnt=" + $scope.days + "&APPID=" + apiKey, {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
  $scope.weatherResult = $scope.weatherAPI.get({});
  $scope.daysList = $scope.weatherResult.list;

  $scope.convertToFahrenheit = function(degK) {
    return Math.round((1.8 * (degK - 273)) + 32);
  }

  $scope.convertToDateFormat = function(milliseconds) {
    return new Date(milliseconds * 1000);
  }
}])
