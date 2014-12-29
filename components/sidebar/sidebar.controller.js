'use strict';

angular.module('gl.geekymenu')
    .controller('SidebarCtrl', function ($scope, $location, Auth, SidebarMenu) {
        $scope.menu = SidebarMenu.menu;
        $scope.isActive = function (path) {
            var current = $location.path();
            if (current === path || (current.indexOf(path) === 0 && path != '/')) {
                return true;
            }
            return false;
        };

        $scope.isShow = function (show) {
            if (show == 'isAdmin') {
                return Auth.isAdmin();
            } else if (show == 'isLoggedIn') {
                return Auth.isLoggedIn();
            }

            return true;
        }

    }).provider('SidebarMenu', function () {
        var menu;
        return {
            setMenu: function (arr) {
                menu = arr;
            },
            $get: function () {
                return {
                    menu: menu
                };
            }
        };
    })
    .directive('sidebar', function () {
        return {
            templateUrl: 'components/sidebar/sidebar.html',
            controller: 'SidebarCtrl',
            restrict: 'EA'
        };
    });
