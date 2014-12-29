'use strict';

angular.module('gl.geekymenu')
    .factory('Order', function ($resource) {
        return $resource('/api/orders/:id/:controller', {
                id: '@_id'
            },
            {
                statusChange: {
                    method: 'PUT',
                    params: {
                        controller: 'status'
                    }
                }
            });
    });
