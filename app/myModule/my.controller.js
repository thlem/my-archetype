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