'use strict';

angular.module('gl.geekymenu')
    .factory('User', function ($resource) {
        return $resource('/api/users/:id/:controller', {
                id: '@_id'
            },
            {
                changePassword: {
                    method: 'PUT',
                    params: {
                        controller: 'password'
                    }
                },
                update: {
                    method: 'PUT',
                    params: {
                        id: "@_id"
                    }
                },
                get: {
                    method: 'GET',
                    params: {
                        id: 'me'
                    }
                }
            });
    });
