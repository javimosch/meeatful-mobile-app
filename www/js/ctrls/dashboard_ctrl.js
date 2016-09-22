angular.module('app_dashboard_ctrl', [])
    .controller('dashboardCtrl', function($scope, $ionicModal, $timeout, $ionicPlatform, $storage, $ionicAuth, $ionicUser, $ionicPopup, $data) {

        $scope.user = $data.user;



    });