'use strict';

angular.module('gl.geekymenu')
    .factory('Category', function ($resource) {
        return $resource('/api/categories/:id', {
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
