'use strict';

angular.module('gl.geekymenu')
    .factory('Notification', function ($resource) {
        return $resource('/api/notifications/:id', {
            id: '@_id'
        }, {
            'query': {
                method: 'GET',
                params: {
                    notComplete: 1
                },
                isArray: true
            },
            update: {
                method: 'PUT',
                params: {
                    id: "@_id"
                }
            }
        });
    });
