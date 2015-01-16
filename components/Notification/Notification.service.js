'use strict';

angular.module('gl.geekymenu')
    .factory('Notification', function ($resource) {
        return $resource('/api/notifications/:id/:controller', {
            id: '@_id'
        }, {
            'query': {
                method: 'GET',
                params: {
                    status: 0,
                    page: 1
                },
                isArray: true
            },
            update: {
                method: 'PUT',
                params: {
                    id: "@_id"
                }
            },
            statusChange: {
                method: 'PUT',
                params: {
                    controller: 'status'
                }
            }
        });
    });
