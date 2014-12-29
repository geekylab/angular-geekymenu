'use strict';

angular.module('gl.geekymenu')
    .directive('tableKeyControll', function () {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                console.log(element.rows);
            }
        };
    });