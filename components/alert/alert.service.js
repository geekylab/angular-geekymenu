'use strict';

angular.module('gl.geekymenu')
    .factory('Alert', function ($rootScope, $timeout) {
        $rootScope.alerts = [];
        return {
            add: function (type, msg) {
                $rootScope.alerts.push({'type': type, 'msg': msg});
                $timeout(function (type, msg) {
                    $rootScope.alerts.splice($rootScope.alerts.indexOf(alert), 1);
                }, 5000);
            },
            closeAlert: function (index) {
                $rootScope.alerts.splice(index, 1);
            }
        };
    });
