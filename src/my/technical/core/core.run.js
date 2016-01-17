(function() {
    'use strict';

    /**
     * Module      : my.core
     * Description : RunDescription
     */
    angular.module('my.technical.core').run(RunFunction);

    /* @ngInject */
    function RunFunction($log) {
        console.log('START')
    }

})();