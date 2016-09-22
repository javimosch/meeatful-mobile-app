angular.module('app_profile_ctrl', [])
    .controller('profileCtrl', function($scope, $ionicModal, $timeout, $ionicPlatform, $storage, $ionicAuth, $ionicUser, $ionicPopup, $data, $ionicLoading) {

        
        $scope.user = $data.user;
        var pass = $scope.user.details.password;

        $scope.doSave = function() {

            $scope.user.store();

            $ionicLoading.show({
                template: 'Saving...'
            })

            $scope.user.save().then(function() {


                $ionicLoading.hide();

                if ($scope.user.details.password != pass) {
                    $scope.doPasswordChangedPopup();
                    pass = $scope.user.password;
                }


            });


        }

        $scope.doPasswordChangedPopup = function() {
            var alertPopup = $ionicPopup.alert({
                title: "Password changed",
                //template: '<p class="text-center">' + template + '</p>',
                okText: "Ok!",
                okType: "button-energized"
            });
        };


    });