(function(){
  'use strict';
//   // 1. Inline array with function as last element
//   angular.module('DIApp', []).controller('DIController', ['$scope','$injector','$filter',function($scope, $injector,$filter){
//     $scope.name = "Vinod";
//     $scope.upper = function(){
//       var upCase = $filter('uppercase');
//       $scope.name = upCase($scope.name);
//     };
// 	}]);
// })();

  angular.module('DIApp', [])
  .controller('DIController', DIController);
  // 1. Attach $inject property to the function obejct more effidient way
  DIController.$inject = ['$scope','$filter', '$injector'];

  function DIController($scope, $filter, $injector) {
    $scope.name = "Vinod";

    $scope.upper = function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  console.log($injector.annotate(DIController));
  }

  function annotateMe(name, job, blah) {
      return "Blah!";
  }
  console.log(DIController.toString());
})();
