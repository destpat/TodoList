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
// function run($rootScope, $location){
// 	var path = function() { return $location.path(); };
// 	$rootScope.$watch(path, function(newVal, oldVal){
// 		$rootScope.activetab = newVal;
// 	});
// }
angular.module('app', ['ngRoute'])
    .config(config)
    .controller('taskController', taskController);
