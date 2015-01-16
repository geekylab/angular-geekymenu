'use strict';
angular.module('gl.geekymenu')
    .filter('orderStatusFilter', function ($translate, mySettings) {
        return function (input) {
            if (input == mySettings.ORDER_STATUS_AUTHENTICATED) {
                return $translate.instant("AUTHENTICATED");
            } else if (input == mySettings.ORDER_STATUS_AUTHENTICATION_WAITING) {
                return $translate.instant("AUTHENTICATED WAITING");
            } else if (input == mySettings.ORDER_STATUS_REJECTED) {
                return $translate.instant("REJECTED");
            }
            return $translate.instant("UNKNOWN");
        };
    });
