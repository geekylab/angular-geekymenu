'use strict';

angular.module('gl.geekymenu')
    .controller('NavbarCtrl', function ($scope, $location, Auth, Notification, socket, Order) {

        var audio = new Audio("components/navbar/ｍp3/notification.mp3");
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
        }];

        $scope.notifications = [];
        Notification.query({page: 1, status: 1}, function (notifications) {
            $scope.notifications = notifications;
            socket.syncUpdates('notification', $scope.notifications, true, function () {
                audio.play();
            });
        });


        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function () {
            Auth.logout();
            $location.path('/login');
        };

        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.isType = function (type, notification) {
            return type == notification.type;
        }

        $scope.accept = function (notification) {
            Order.statusChange({id: notification.custom_id}, {
                newStatus: 2
            }, function () {
                setNotificationRead(notification);
            });
        };

        $scope.ignore = function (notification) {
            Order.statusChange({id: notification.custom_id}, {
                newStatus: 99
            }, function () {
                setNotificationRead(notification);
            });
        };

        function setNotificationRead(notification) {
            Notification.statusChange({id: notification._id}, {
                newStatus: 1
            }, function (newNotification) {
                notification = newNotification;
            });
        }

    }).directive('navbar', function () {
        return {
            templateUrl: 'components/navbar/navbar.html',
            controller: 'NavbarCtrl',
            restrict: 'EA',
            link: function (scope, element, attrs) {
            }
        };
    });