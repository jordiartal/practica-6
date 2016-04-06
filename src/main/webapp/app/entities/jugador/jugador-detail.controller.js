(function() {
    'use strict';

    angular
        .module('practica6App')
        .controller('JugadorDetailController', JugadorDetailController);

    JugadorDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Jugador', 'Equipo'];

    function JugadorDetailController($scope, $rootScope, $stateParams, entity, Jugador, Equipo) {
        var vm = this;
        vm.jugador = entity;
        vm.load = function (id) {
            Jugador.get({id: id}, function(result) {
                vm.jugador = result;
            });
        };
        var unsubscribe = $rootScope.$on('practica6App:jugadorUpdate', function(event, result) {
            vm.jugador = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
