function taskController($scope) {

  $(document).ready(function() {
    $('.collapsible').collapsible({
      accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

  $("#title").typed({
        strings: ["Ma liste de tâches . . .", "Ma liste de tâches 100% front-end"],
        startDelay: 800,
        backSpeed: 60,
        typeSpeed: 60
      });
  $scope.tasks = [];
  $scope.show = true; // boolean for hide or show "Vous n'avez pas encore de tâche"
  var selectedTaskId = -1;

  // Add Tasks //
  $scope.add = function() {
    // Check if input is empty //
    if(!$scope.todo)
      return Materialize.toast('Avez vous déja oublier ce que vous deviez faire ?', 3900,'red');

    $scope.tasks.push({
      todo: $scope.todo,
      isFav: false,
      subTasks: [],
    });
    $scope.todo = '';
    $scope.show = false;
  };

  // Add Sub Task //
  $scope.subadd = function(index, ctx) {
    // Check if input is empty //
    if(ctx.subtask === ''){
      return Materialize.toast('Votre sous tâche est vide : )', 3900 ,'red');
    }
    // Check if number of subTask is greater than 3 //
    if ($scope.tasks[index].subTasks.length > 2) {
      return Materialize.toast('Vous ne pouvez ajouter que 3 sous tâches', 3900, 'red');
    }
      $scope.tasks[index].subTasks.push({
        todo: ctx.subtask,
      });
      ctx.subtask = "";
  };

  // Change color of the star //
  $scope.starColor = function(index) {
    var starTarget = "#star" + index;
    $scope.tasks[index].isFav = !$scope.tasks[index].isFav;

    // Notification
    if ($scope.tasks[index].isFav)
      Materialize.toast('Vous avez ajouter votre tâche en favoris', 3900 , 'blue lighten-1');
    else
      Materialize.toast('Vous avez retirer votre tâche de vos favoris', 3900, 'blue lighten-1');
  };

  // Delete all task //
  $scope.deleteAll = function() {
    $scope.tasks = [];
    $scope.show = true;
  };

  // Delete only one task //
  $scope.delete = function(index) {
    $scope.tasks.splice(index, 1);
    $scope.show = ($scope.tasks.length === 0);
  };

  // Store the Task id for delete only one sub task //
  $scope.storeTaskId = function(index) {
    selectedTaskId = index;
  };

  // Delete Only one sub task //
  $scope.deleteSub = function(index) {
    $scope.tasks[selectedTaskId].subTasks.splice(index, 1);
  };
}
