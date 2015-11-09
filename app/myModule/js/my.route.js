  (function () {
    'use strict';

    angular
      .module('app.my')
      .config(config);

    /* @ngInject */
    function config($routeProvider) {
      $routeProvider
        .when('/my', {
          templateUrl: 'my.html',
          controller: 'MyController',
          controllerAs: 'myController'
        });
    }

  })();