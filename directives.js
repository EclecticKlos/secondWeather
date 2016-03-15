// DIRECTIVES
secondWeather.directive("dailyForecastSnippet", function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/dailyForecastSnippet.html',
    replace: true,
    scope: {
      dateTempObject: '=',
      convertToFahrenheit: '&',
      convertToDate: '&',
      dateFormat: '@'
    }
  }
})
