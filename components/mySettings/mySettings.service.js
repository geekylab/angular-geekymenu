'use strict';

angular.module('cloud2App')
    .factory('mySettings', function () {
        // Public API here
        return {
            ORDER_STATUS_AUTHENTICATED: 1,
            ORDER_STATUS_AUTHENTICATION_WAITING: 2,
            ORDER_STATUS_REJECTED: 99
        };
    });
