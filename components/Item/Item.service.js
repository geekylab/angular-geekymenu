'use strict';

angular.module('gl.geekymenu')
    .factory('Item', function ($resource) {
        return $resource('/api/items/:id', {
            id: '@_id'
        }, {
            update: {
                method: 'PUT',
                params: {
                    id: "@_id"
                }
            }
        });
    });
