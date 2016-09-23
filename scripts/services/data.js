'use strict';

angular.module('artVidApp')
.service('dataService', function($http) {

    this.getVids = function(callback) {
        $http.get('https://www.reddit.com/r/artisanvideos/hot.json?limit=6').then(callback);
    };

})
