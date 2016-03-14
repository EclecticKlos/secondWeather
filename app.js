var secondWeather = angular.module('secondWeather', ['ngRoute', 'ngResource']);

secondWeather.config(function($routeProvider){

  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeCtrl'
  })

  .when('/forecast/:numOfDays', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastCtrl'
  })

})


secondWeather.controller('homeCtrl', ['$scope', 'cityService', function($scope, cityService) {
  $scope.greeting = "Place";
  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
    console.log(cityService.city);
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

  console.log($scope.weatherResult)
}])

secondWeather.service('cityService', function(){
  this.city = "San Francisco";
})
