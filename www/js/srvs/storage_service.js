angular.module('app_storage_service',[])
    .factory('$storage', function($localStorage) {

        $localStorage = $localStorage.$default({
            data: {
                auth: {
                    email: '',
                    password: ''
                }
            }
        });

        var data = $localStorage.data;


        var _getAll = function() {
            return $localStorage.things;
        };
        var _add = function(thing) {
            $localStorage.things.push(thing);
        }
        var _remove = function(thing) {
            $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
        }

        return data;
    })