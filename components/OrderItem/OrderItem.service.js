'use strict';

angular.module('gl.geekymenu')
    .factory('OrderItem', function ($resource) {
        return $resource('/api/orderItems/:id', {
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
            },
            accept: {
                method: 'PUT',
                params: {
                    id: "@_id"
                }
            },
            complete: {
                method: 'PUT',
                params: {
                    id: "@_id"
                }
            }
        });
    });
