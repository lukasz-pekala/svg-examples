var app = angular.module("myApp", ["ngRoute"]);

app.run(function($rootScope){
    $rootScope.$on('$routeUpdate', function(){
        console.log("routechanged.");
    });
})

app.config(function($routeProvider) {
    console.log("Hej");
    $routeProvider
    .when("/layoutandviewbox", {
        templateUrl : "views/layout-and-viewbox.html"
    })
    .when("/basicshapes", {
        templateUrl : "views/basic-shapes.html"
    })
    .when("/advancedshapes", {
        templateUrl : "views/advanced-shapes.html"
    })
    .when("/inlineandexternal", {
        templateUrl : "views/inline-and-external-svg.html"
    })
    .when("/groups", {
        templateUrl : "views/groups.html"
    })
    .when("/transformations", {
        templateUrl : "views/transformations.html"
    })
    .when("/effects", {
        templateUrl : "views/effects.html"
    })
    .when("/bootstrap", {
        templateUrl : "views/bootstrap.html"
    })
    .when("/", {
        templateUrl : "views/basic-shapes.html"
    });
});


app.controller('TransformationsController', ['$scope', function($scope) {
  $scope.rotation_angle = 0;
  $scope.translate_x = 0;
  $scope.translate_y = 0;
  $scope.scale = 1;
}]);