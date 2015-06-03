angular.module('ionicApp', ['ionic', 'ionicApp.controllers'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html"
            })
            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/home.html"
                    }
                }
            })
            .state('app.profiel', {
                url: "/profiel",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/profiel.html",
                        controller: "ProfielCtrl"
                    }
                }
            })
            .state('app.attendees', {
                url: "/planning",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/planning.html",
                        controller: "PlanningCtrl"
                    }
                }
            });

        $urlRouterProvider.otherwise("/app/home");
    });