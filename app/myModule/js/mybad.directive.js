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