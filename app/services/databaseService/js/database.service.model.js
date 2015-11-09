  (function () {
    'use strict';

    angular
      .module('app.service.database')
      .factory('DataBaseService', DataBaseService);

    /* @ngInject */
    function DataBaseService($http) {

      return {
        methodName: methodName
      };

      function methodName() {

        return $http.get('/api/maa').then(getSuccess).catch(getFailed);

        function getSuccess(response) {

        }

        function getFailed(error) {

        }

      }

    }

  })();