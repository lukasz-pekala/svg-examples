var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html"
    })
    .when("red", {
        templateUrl : "views/basic-shapes.htm"
    })
    .when("/green", {
        templateUrl : "views/green.htm"
    })
    .when("/blue", {
        templateUrl : "views/blue.htm"
    });
});