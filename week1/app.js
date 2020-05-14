(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchInput = ""

    $scope.checkLunch = function() {
         $scope.outputCheck = $scope.lunchMenu
    };
  }

})();