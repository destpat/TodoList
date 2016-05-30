function taskController($scope){
  $scope.tasks = [];
  $scope.y = 0;

  $scope.add = function (){
    $scope.tasks.push({
      todo : $scope.todo,
      subTasks: []
    });
    $scope.todo = '';
  };

  $scope.subadd = function (subTasks, index){
    // console.log($scope);
    $scope.tasks[index].subTasks.push({
        todo : subTasks,
      });
      console.log( $scope.subTasks);
  };

  $scope.deleteAll = function (){
    $scope.tasks = [];
  };
  $scope.delete = function (index){
    $scope.tasks.splice(index, 1);
  };
  $scope.addFav = function (index){
    if($scope.y === 0){
      $scope.y++;
    }
    else if($scope.y === 1){
      $scope.y--;
    }
  };
}
