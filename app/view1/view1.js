'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
$scope.FormVisibility =false;

$scope.alumnos =[ {"nombre" :"fabian",
                                  "curso"    :"A1"
                              },
                              {"nombre"   : "angela",
                              "curso"        : "A2"
                           }
                           ];

  $scope.alumnoAdd= function () {
  	$scope.alumnos.push({nombre: $scope.alumnoNuevo.name,curso:$scope.alumnoNuevo.curso});
  	    $scope.FormVisibility = false;  
  	    $scope.alumnoNuevo.name = "";
  	    $scope.alumnoNuevo.curso = "";	
  	// body    $scope.FormVisibility = true;  	...
     };
          
  $scope.showForm = function()
  {
    $scope.FormVisibility = true;  	
 
  }   ;                   

}]);