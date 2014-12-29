'use strict';

angular.module('gl.geekymenu')
    .factory('Store', function ($resource) {
        return $resource('/api/stores/:id', {
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
