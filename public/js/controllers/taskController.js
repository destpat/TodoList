function taskController($scope) {
  $scope.names = [];
  $scope.i = 0;


$scope.add = function(){
  $scope.names.push({
    todo : $scope.task
  });
}

$scope.removeTask = function(index){
  $scope.names.splice(index,1);
}


}
