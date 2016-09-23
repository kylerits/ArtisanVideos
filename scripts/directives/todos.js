angular.module('artVidApp')
.directive('artvids', function() {
    return{
        templateUrl: 'templates/artvids.html',
        controller: 'mainCtrl',
        replace: true
    }
});
