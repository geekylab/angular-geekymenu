'use strict';
angular.module('gl.geekymenu')
    .filter('currentLang', function ($translate, Auth) {
        return function (input, lang) {
            var currentUser = Auth.getCurrentUser();
            if (!lang) {
                lang = currentUser.lang;
            }

            if (!lang) {
                lang = $translate.use();
            }
            if (input instanceof Object) {
                return input[lang] || input['en'];
            } else {
                return input;
            }
        };
    });
