angular.module('app_data_service', [])
    .factory('$data', function($ionicUser) {

        return {
            user: $ionicUser
        }
    })