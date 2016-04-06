(function() {
    'use strict';
    angular
        .module('practica6App')
        .factory('Jugador', Jugador);

    Jugador.$inject = ['$resource', 'DateUtils'];

    function Jugador ($resource, DateUtils) {
        var resourceUrl =  'api/jugadors/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.fechaNacimiento = DateUtils.convertLocalDateFromServer(data.fechaNacimiento);
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.fechaNacimiento = DateUtils.convertLocalDateToServer(data.fechaNacimiento);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.fechaNacimiento = DateUtils.convertLocalDateToServer(data.fechaNacimiento);
                    return angular.toJson(data);
                }
            }
        });
    }
})();
