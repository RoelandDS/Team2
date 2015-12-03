/**
 * Created by Jarno on 03/12/15.
 */
(function () {
    angular.module('htf')
        .factory('colorFactory', colorFactory)

    colorFactory.$inject = ['$http', 'GLOBALS'];

    function colorFactory($http, GLOBALS) {
        var factory = {};

        factory.setLight = function (kleur) {
            return $http({
                method: 'PUT',
                url: GLOBALS.lightStateUrl,
                data: kleur
            });
        };

        factory.getTeams = function () {
            return $http({
                method: 'GET',
                url: GLOBALS.teamUrl,
                data: '{"id":6,"name":"Koen & Jarno","done":null,"members":[{"id":1,"name":"Koen Vaes"},{"id":2,"name":"Jarno Michiels"}]}'
            });
        };

        factory.setTeam = function () {
            return $http({
                method: 'PUT',
                url: GLOBALS.teamUrl,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: '{"id":6,"name":"Koen & Jarno","done":null,"members":[{"id":1,"name":"Koen Vaes"},{"id":2,"name":"Jarno Michiels"}]}'
            });
        };

        return factory;
    }
})();