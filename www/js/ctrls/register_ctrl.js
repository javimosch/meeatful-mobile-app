angular.module('app_register_ctrl', [])
    .controller('registerCtrl', function($scope, $ionicModal, $timeout, $ionicPlatform, $storage, $ionicAuth, $ionicUser, $ionicPopup) {

        $scope.data = {
            email: '',
            password: ''
        };

        $scope.doRegister = function() {

            if (!$scope.data.email) return $scope.doAlert('Email required');
            if (!$scope.data.password) return $scope.doAlert('Password required');

            $ionicAuth.signup($scope.data).then(function() {
                // `$ionicUser` is now registered
                console.log('register!');
            }, function(err) {
                for (var e in err.details) {
                    if (e === 'conflict_email') {
                        $scope.doAlert('Email already exists.');
                    }
                    else {
                        $scope.doAlert(e);
                    }
                }
            });
        }

        $scope.doAlert = function(template) {
            var alertPopup = $ionicPopup.alert({
                //title: "Hey",
                template: '<p class="text-center">' + template + '</p>',
                okText: "Ok",
                okType: "button-balanced"
            });
        };


    });