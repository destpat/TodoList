
function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/task.html',
			controller: 'taskController'
		})
		.otherwise({
			redirectTo: '/'
		});
}

angular.module('app', ['ngRoute'])
    .config(config)
    .controller('taskController', taskController);
