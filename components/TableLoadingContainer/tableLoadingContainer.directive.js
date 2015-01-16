'use strict';

angular.module('gl.geekymenu')
    .directive('loadingContainer', function ($document) {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element, attrs) {
                var loadingLayer = angular.element('<div class="loading"><div><i class="fa fa-spinner fa-5x fa-spin"></i></div></div>');
                var body = $document.find('body').eq(0);
                body.prepend(loadingLayer);
                scope.$watch(attrs.loadingContainer, function (value) {
                    loadingLayer.toggleClass('ng-hide', !value);
                });
            }
        };
    });