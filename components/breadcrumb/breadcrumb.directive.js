'use strict';

angular.module('gl.geekymenu')
    .directive('breadcrumb', function () {
        return {
            templateUrl: 'components/breadcrumb/breadcrumb.html',
            restrict: 'EA',
            scope: {
                items: '='
            },
            link: function (scope, element, attrs) {
            }
        };
    });