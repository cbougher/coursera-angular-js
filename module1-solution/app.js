(function() {
  'use strict';

  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.menu = "";
    $scope.message = "";
    $scope.outcome = "primary";
    $scope.validationState = "";

    $scope.checkMenu = function() {
      // split menu
      var strings = $scope.menu.split(',');

      // remove blanks
      for(var i = strings.length - 1; i >= 0; i--) {
        if(strings[i].trim() === '') {
          strings.splice(i, 1);
        }
      }

      // set the message based on the item count
      switch(strings.length) {
        case 0:
          $scope.message = "Please enter data first"
          $scope.outcome = "danger";
          $scope.validationState = "has-error";
          break;
        case 1:
        case 2:
        case 3:
          $scope.message = "Enjoy!";
          $scope.outcome = "success";
          $scope.validationState = "has-success";
          break;
        default:
          $scope.message = "Too much!"
          $scope.outcome = "success";
          $scope.validationState = "has-success";
      }
    }
  }

})();