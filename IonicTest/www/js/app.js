angular.module('ionicApp', ['ionic', 'ionicApp.controllers', 'ngCordova'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html"
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'

            })
            .state('app.intro', {
                url: "/intro",
                views: {
                    'menuContent': {
                        templateUrl: "templates/intro.html",
                        controller: "IntroCtrl"
                    }
                }
            })

            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/home.html",
                        controller: 'MainCtrl'

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
            })
            .state('app.rooster', {
                url: "/rooster",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/rooster.html",
                        controller: "RoosterCtrl"
                    }
                }
            })
            .state('app.inplannen', {
                url: "/inplannen",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/inplannen.html",
                        controller: "InplannenCtrl"
                    }
                }
            });

        $urlRouterProvider.otherwise('/login');
    });

    /*.run(function ($cordovaSplashscreen) {
        setTimeout(function () {
            $cordovaSplashscreen.hide();
        }, 5000);
    });*/