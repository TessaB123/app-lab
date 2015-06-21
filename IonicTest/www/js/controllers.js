angular.module('ionicApp.controllers', [])

    .controller('MainCtrl', function($scope, $state, $ionicSideMenuDelegate) {
        //console.log('MainCtrl');
        //setTimeout(function () {
        //    navigator.splashscreen.hide();
        //}, 750);

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.toIntro = function() {
            window.localStorage['didTutorial'] = "false";
            $state.go('app.intro');
        };
    })

    .controller('ProfielCtrl', function($scope) {

    })

    .controller('PlanningCtrl', function($scope) {

    })


    .controller('RoosterCtrl', function($scope) {
    /* config object */
        $scope.uiConfig = {
            calendar:{
            height: 450,
            editable: true,
            header:{
            left: 'month basicWeek basicDay agendaWeek agendaDay',
            center: 'title',
            right: 'today prev,next'
            },
            dayClick: $scope.alertEventOnClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize
            }
            };
    })

    .controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
        var startApp = function () {
            $state.go('app.home');

            window.localStorage['didTutorial'] = true;
        };

        if (window.localStorage['didTutorial'] === "true") {
            console.log('Skip intro');
            startApp();
        }

        $scope.slideChanged = function(index) {
            $scope.slideIndex = index;
        };


        $scope.next = function(){
            $ionicSlideBoxDelegate.next();
        };

        $scope.previous = function () {
            $ionicSlideBoxDelegate.previous();
        };

        $scope.toApp = function(){
          $state.go('app.home');
          window.localStorage['didTutorial'] = true;
        };
    });