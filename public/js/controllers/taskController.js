function taskController($scope) {
  $(document).ready(function() {
    $('.collapsible').collapsible({
      accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
  $scope.title = $(".element").typed({
        strings: ["Ma liste de tâche", "Ma liste de tâche 100% front-end"],
        startDelay: 800,
        backSpeed: 60,
        typeSpeed: 60,
      });
  $scope.tasks = [];
  $scope.show = true; // boolean for hide or show "Vous n'avez pas encore de tâche"

  // Add Tasks //
  $scope.add = function() {
    // Check if input is empty //
    if($('#input_task').val() === ''){
    return Materialize.toast('Avez vous déja oublier ce que vous deviez faire ?', 3900,'red');
    }
    $scope.tasks.push({
      todo: $scope.todo,
      subTasks: [],
    });
    $scope.todo = '';
    $scope.show = false;
  };

  // Add Sub Task //
  $scope.subadd = function(subTask, index) {
    // Check if input is empty //
    var subTarget = "#object-" + index;
    if($(subTarget).val() === ''){
    return Materialize.toast('Votre sous tâche est vide : )', 3900 ,'red');
    }
    // Check if number of subTask is greater than 3 //
    if ($scope.tasks[index].subTasks.length > 2) {
      return Materialize.toast('Vous ne pouvez ajouter que 3 sous tâches', 3900, 'red');
    }
      $scope.tasks[index].subTasks.push({
        todo: subTask,
      });
      $scope.tasks[index].currentSubtask = "";
  };

  // Change color of the star //
  $scope.starColor = function(index) {
    var starTarget = "#star" + index;
    if ($(starTarget).hasClass('glyphicon-star')) {
        $(starTarget).removeClass('glyphicon-star').addClass('glyphicon-star-empty');
      Materialize.toast('Vous avez retirer votre tâche des favories', 3900, 'blue lighten-1');
    } else if ($(starTarget).hasClass('glyphicon-star-empty')) {
      $(starTarget).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
      Materialize.toast('Vous avez ajouter votre tâche en favorie', 3900 , 'blue lighten-1');
    }
  };

  // Delete all task //
  $scope.deleteAll = function() {
    $scope.tasks = [];
    $scope.show = true;
    console.log($scope.show);
  };
  // Delete only one task //
  $scope.delete = function(index) {
    $scope.tasks.splice(index, 1);
    if ($scope.tasks.length === 0) {
      $scope.show = true;
    }
  };
  // Store the Task id for delete only one sub task //
  $scope.storeTaskId = function(index) {
    task_id = index;
  };
  // Delete Only one sub task //
  $scope.deleteSub = function(index) {
    $scope.tasks[task_id].subTasks.splice(index, 1);
  };
}
