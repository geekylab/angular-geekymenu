'use strict';
angular.module('gl.geekymenu')
    .filter('orderStatusFilter', function ($translate, mySettings) {
        return function (input, type) {

            if (type == undefined) {
                if (input == mySettings.ORDER_STATUS_AUTHENTICATED) {
                    return $translate.instant("AUTHENTICATED");
                } else if (input == mySettings.ORDER_STATUS_AUTHENTICATION_WAITING) {
                    return $translate.instant("AUTHENTICATED WAITING");
                } else if (input == mySettings.ORDER_STATUS_REJECTED) {
                    return $translate.instant("REJECTED");
                }
            } else if (type == 'orderItem') {
                if (input == mySettings.ITEM_STATUS_MAKING) {
                    return $translate.instant("MAKING");
                } else if (input == mySettings.ITEM_STATUS_COMPLETE) {
                    return $translate.instant("COMPLETE");
                } else if (input == mySettings.ITEM_STATUS_CANCEL) {
                    return $translate.instant("CANCELED");
                }
            }
            return $translate.instant("UNKNOWN");
        };
    });
