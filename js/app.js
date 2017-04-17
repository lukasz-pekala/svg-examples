var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("layout-and-viewbox", {
        templateUrl : "views/layout-and-viewbox.html"
    })
    .when("basic-shapes", {
        templateUrl : "views/basic-shapes.html"
    })
    .when("advanced-shapes", {
        templateUrl : "views/advanced-shapes.html"
    })
    .when("/groups", {
        templateUrl : "views/groups.html"
    })
    .when("transformations", {
        templateUrl : "views/transformations.html"
    })
    .when("effects", {
        templateUrl : "views/effects.html"
    })
    .when("/", {
        templateUrl : "views/basic-shapes.html"
    });
});
