'use strict';

angular.module('cloud2App')
    .factory('mySettings', function () {
        // Public API here
        return {
            ORDER_STATUS_AUTHENTICATION_WAITING: 1,
            ORDER_STATUS_AUTHENTICATED: 2,
            ORDER_STATUS_REJECTED: 99,

            ITEM_STATUS_MAKING: 1,
            ITEM_STATUS_COMPLETE: 2,
            ITEM_STATUS_CANCEL: 99
        };
    });
