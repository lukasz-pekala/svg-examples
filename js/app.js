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
    .when("/groups", {
        templateUrl : "views/groups.html"
    })
    .when("/transformations", {
        templateUrl : "views/transformations.html"
    })
    .when("/effects", {
        templateUrl : "views/effects.html"
    })
    .when("/", {
        templateUrl : "views/basic-shapes.html"
    });
});
