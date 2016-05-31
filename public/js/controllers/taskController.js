function taskController($scope){
  $scope.tasks = [];

  $scope.add = function (){
    $scope.tasks.push({
      todo : $scope.todo,
      subTasks: [],
    });
    console.log($scope.tasks);
    $scope.todo = '';
  };
  $scope.subadd = function (subTask, index){
    console.log($scope.tasks[index].subTasks.length);
    $scope.tasks[index].subTasks.push({
        todo : subTask,
      });
  };

  $scope.deleteAll = function (){
    $scope.tasks = [];
  };

  $scope.delete = function (index){
    $scope.tasks.splice(index, 1);
  };

  $scope.storeTaskId = function (index){
    task_id = index;
  };

  $scope.deleteSub = function (index){
    console.log(task_id);
    $scope.tasks[task_id].subTasks.splice(index, 1);
  };
}
