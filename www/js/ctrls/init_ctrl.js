angular.module('app_init_ctrl', [])
    .controller('initCtrl', function($scope,$state, $ionicModal, $timeout, $ionicPlatform, $storage, $ionicAuth, $ionicUser) {

        //check user login


        if ($storage.auth.email && $storage.auth.password) {
            console.log('trying basic login', $storage.auth)
            $ionicAuth.login('basic', $storage.auth).then(function(res) {
                console.log(res);
            });
        }else{
            $state.go('login')
        }


    });