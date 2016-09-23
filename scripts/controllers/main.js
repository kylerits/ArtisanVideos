'use strict';

angular.module('todoListApp')

.controller('mainCtrl', function($scope, dataService) {

    /*$scope.addTodo = function() {
        var todo = {name : 'This is a new todo.'};
        $scope.todos.unshift(todo);
    };*/

    /*$scope.learningNgChange = function() {
        console.log('An input changed!');
    };*/

    dataService.getVids(function(response) {
        $scope.vids = response.data.data.children;
    });

    $scope.embedVid = function(vidLink) {
        var newLink = vidLink.replace('watch?v=', 'embed/');
        $scope.embedHTML =  newLink;
    }

    /*$scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };

    $scope.saveTodos = function(todo) {
        var filteredTodos = $scope.todos.filter(function(todo) {
            if(todo.edited) {
                return todo;
            };
        });
        dataService.saveTodos(filteredTodos);
    };*/

});
