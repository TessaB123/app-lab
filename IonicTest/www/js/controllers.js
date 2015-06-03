angular.module('ionicApp.controllers', [])

    .controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })

    .controller('ProfielCtrl', function($scope) {

    })

    .controller('PlanningCtrl', function($scope) {

    });