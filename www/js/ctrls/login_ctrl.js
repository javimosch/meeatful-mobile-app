angular.module('app_login_ctrl', [])
    .controller('loginCtrl', function($scope, $ionicModal, $timeout, $ionicPlatform, $storage, $ionicAuth, $ionicUser) {

        //check user login
        console.log('check', $storage.auth)
        
        $scope.auth = {
            email:'',
            password:''
        }

        $scope.doLogin = function() {
            $ionicAuth.login('basic', $storage.auth).then(function(res) {
                console.log(res);
            });
        }
        
        $scope.doLoginFacebook = function(){
             $ionicAuth.login('facebook', $storage.auth).then(function(res) {
                console.log(res);
            });
        }


    });