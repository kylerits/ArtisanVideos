'use strict';

angular.module('artVidApp')

.controller('mainCtrl', function($scope, dataService) {


    dataService.getVids(function(response) {
        $scope.vids = response.data.data.children;
    });


});
