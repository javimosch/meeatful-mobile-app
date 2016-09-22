angular.module('app_login_ctrl', [])
    .controller('loginCtrl', function($scope, $state, $ionicModal, $timeout, $ionicPlatform, $storage, $ionicAuth, $ionicUser, $ionicPopup) {
        $scope.$state = $state;

        //check user login
        console.log('check', $storage.auth)

        $scope.auth = {
            email: '',
            password: ''
        }

        if ($ionicAuth.isAuthenticated()) {
            $state.go('app.dashboard');
        }

        $scope.doLogin = function() {

            if (!$scope.auth.email) return $scope.doAlert('Email required');
            if (!$scope.auth.password) return $scope.doAlert('Password required');

            console.log('check login', $scope.auth)


            $ionicAuth.login('basic', $scope.auth).then(function(res) {
                $state.go('app.dashboard');
            }, function(res) {

                var res = JSON.parse(res.response.text).error;

                if (res.type == 'Unauthorized') $scope.doAlert(res.message);

                $scope.doAlert(res.message);
            }).catch(function(err) {
                if (err.indexOf('UNAUTHORIZED')) {
                    $scope.doAlert('Invalid credentials');
                }
            })
        }

        $scope.doLoginFacebook = function() {

            /*
            $ionicAuth.login('facebook').then(function(res) {
                console.log(res);
            },function(err){
                console.log(err);
            });
            */

            window.facebookConnectPlugin.login(["email", "public_profile"], function(data) {
                console.log('FB LOGIN OK');
                console.log(data);
                alert('OK!');
            }, function(error) {
                console.log('FB LOGIN ERROR');
                console.log(error);
                alert('ERROR!');
            });
        }

        $scope.doLoginGoogle = function() {

            window.plugins.googleplus.disconnect();
            window.plugins.googleplus.login({
                    'webClientId': '647614489772-5ssac9g275in82bia7nvnqta8ur7s3di.apps.googleusercontent.com',
                    'offline': true
                },
                function(data) {
                    console.log('GOOGLE LOGIN OK');
                    console.log(JSON.stringify(data));
                    alert('OK!');
                },
                function(error) {
                    console.log('GOOGLE LOGIN ERROR');
                    console.log(JSON.stringify(error));
                    alert('ERROR!');
                }
            );

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