'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {

    this.getVids = function(callback) {
        $http.get('https://www.reddit.com/r/artisanvideos/hot.json?limit=6').then(callback);
    };

    this.deleteTodo = function(todo) {
        console.log('The ' + todo.name + ' has been deleted.');
    };

    this.saveTodos = function(todos) {
        console.log(todos.length + ' todos have been saved.');
    };
})
