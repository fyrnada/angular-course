(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchInput = ""

    $scope.checkLunch = function() {
      if ($scope.lunchInput.length == 0) {
        $scope.outputCheck = "Please enter data first";
      } else {
        checkLenght($scope.lunchInput.split(','));
      }
    };

    function checkLenght(lunches) {
      if (lunches.length <= 3) {
        $scope.outputCheck = "Enjoy!";
      } else {
        $scope.outputCheck = "Too much!";
      }
    };
  }

})();