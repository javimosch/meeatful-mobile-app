angular.module('app_init_ctrl', [])
    .controller('initCtrl', function($scope, $state, $ionicModal, $timeout, $ionicPlatform, $storage, $ionicAuth, $ionicUser) {

        //check user login


        if ($ionicAuth.isAuthenticated()) {
            $state.go('dashboard');
        }

        if ($storage.auth.email && $storage.auth.password) {
            console.log('trying basic login', $storage.auth)
            $ionicAuth.login('basic', $storage.auth).then(function(res) {
                $state.go('app.dashboard');
            },function(_err){
                $state.go('login');
            });
        }
        else {
            $state.go('login')
        }


    });