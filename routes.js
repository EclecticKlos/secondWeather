// ROUTES
secondWeather.config(function($routeProvider){

  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeCtrl'
  })

  .when('/forecast/', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastCtrl'
  })

  .when('/forecast/:numOfDays', {
    templateUrl: 'pages/forecast.html',
    controller: 'forecastCtrl'
  })

});
