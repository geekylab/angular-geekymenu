'use strict';

angular.module('gl.geekymenu')
    .directive('supportLang', function () {
        return {
            controller: function ($scope, $translate) {
                var currentLang = $translate.use();
                $scope.change = function () {
//                    console.log($scope.supportLang.selected);
                };
                $scope.supportLang = {
                    selected: {},
                    languages: [
                        {name: $translate.instant('English'), code: 'en'},
                        {name: $translate.instant('Japanese'), code: 'ja'},
                        {name: $translate.instant('Portuguese'), code: 'pt'}
                    ]
                };

                var current = $scope.supportLang.languages[0];
                for (var i in $scope.supportLang.languages) {
                    if ($scope.supportLang.languages[i].code == currentLang) {
                        current = $scope.supportLang.languages[i];
                    }
                }
                $scope.supportLang.selected = current;
                console.log(current);
            },
            templateUrl: 'components/supportLang/supportLang.html',
            restrict: 'EA',
            link: function (scope, element, attrs) {
            }
        };
    });