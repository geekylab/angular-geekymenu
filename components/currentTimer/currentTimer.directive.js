'use strict';

angular.module('gl.geekymenu')
    .directive('currentTimer', function ($interval) {
        return {
            template: '<div></div>',
            restrict: 'EA',
            scope: {
                item: '='
            },
            link: function (scope, element, attrs) {

                var format,  // date format
                    stopTime,
                    myTime; // so that we can cancel the time updates

                myTime = scope.item.item.time * 60;
                stopTime = $interval(updateTime, 1000);

                element.on('$destroy', function () {
                    $interval.cancel(stopTime);
                });

                function updateTime() {
                    var date1 = new Date(attrs.created);
                    var date2 = new Date();
                    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                    var Seconds_from_T1_to_T2 = timeDiff / 1000;
                    scope.item.time = Math.round(Seconds_from_T1_to_T2);
                    element.text(Math.round(Seconds_from_T1_to_T2) + "/" + myTime);
                }

            }
        };
    });