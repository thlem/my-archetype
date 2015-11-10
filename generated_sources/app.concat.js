  (function () {
    'use strict';

    angular.module('app', [
      'app.core',
      'app.my',
      'app.service'
    ]);

  })();
  (function () {
    'use strict';

    angular
      .module('app.service', [
        'app.service.database'
      ]);

  })();
(function () {
    'use strict';
    
    angular.module('app.core', [
    ]);
    
})();
(function () {
    'use strict';
    
    angular.module('app.my', [
    ]);
    
})();
  (function () {
    'use strict';

    angular
      .module('app.service.database', []);

  })();
(function () {
    'use strict';
    
    var core = angular.module('app.core');
    
    core.config(coreConfig);
    
    /* @ngInject */
    function coreConfig() {
        
    }
})();
(function () {
    'use strict';
    
    angular
            .module('app.core')
            .constant('constName1', 'constante 1');
})();
(function () {
    'use strict';
    
    angular
            .module('app.my')
            .controller('MyController', MyController);
    
    /* @ngInject */
    function MyController() {
        /*jshint validthis: true */
        var vm = this;
        
        activate();
        
        function activate() {
        }
    }
})();
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
    config.$inject = ["$routeProvider"];

  })();
  (function () {
    'use strict';

    angular
      .module("app.my")
      .directive('myBadDirective', myBadDirective);

    function myBadDirective() {

      var directive = {
        link: link,
        templateUrl: '/template/is/located/here.html',
        restrict: 'EA',
        bindToController: true
      };

      return directive;

      function link(scope, element, attrs) {
      }

    }

  })();
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
    DataBaseService.$inject = ["$http"];

  })();