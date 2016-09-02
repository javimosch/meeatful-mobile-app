angular.module('app_register_ctrl', [])
    .controller('registerCtrl', function($scope, $ionicModal, $timeout, $ionicPlatform, $storage, $ionicAuth, $ionicUser) {


        $scope.register = function() {
            $ionicAuth.signup($storage.auth).then(function() {
                // `$ionicUser` is now registered
                console.log('register!');
            }, function(err) {
                for (var e of err.details) {
                    if (e === 'conflict_email') {
                        alert('Email already exists.');
                    }
                    else {
                        console.log(e)
                    }
                }
            });
        }


    });