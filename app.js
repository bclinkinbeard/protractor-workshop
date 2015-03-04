angular.module('app', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'creds.html',
        controller: 'CredsCtrl'
      })
      .when('/forgot', {
        templateUrl: 'forgot.html',
        controller: 'ForgotCtrl'
      })
      .when('/landing', {
        templateUrl: 'landing.html'
      })
      .otherwise('/');
  })
  .controller('CredsCtrl', function ($scope, $location) {
    $scope.submit = function () {
      if ($scope.user &&
        $scope.user.email === 'foo@bar.com' &&
        $scope.user.password === 'baz') {
        $scope.badPassword = false;
        $location.url('/landing');
      } else {
        $scope.badPassword = true;
      }
    };
  })
  .controller('ForgotCtrl', function ($scope, $location) {

  });
