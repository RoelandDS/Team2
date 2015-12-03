/**
 * Created by Jarno on 03/12/15.
 */
(function () {
    'use strict';
    angular.module('htf')
        .controller('htfController', htfController);

    htfController.$inject = ['colorFactory'];

    function htfController(colorFactory) {
        var vm = this;
        vm.errorMsg = '';
        vm.status = '';


        vm.btnClicked = function(button){
            var kleur;

            switch(button){
                case 'rood':
                    kleur = '{"on":true, "bri":254, "xy":[0.6621,0.3023]}';
                    break;
                case 'geel':
                    kleur = '{"on":true, "bri":254, "xy":[0.4947,0.472]}';
                    break;
                case 'blauw':
                    kleur = '{"on":true, "bri":254, "xy":[0.139,0.081]}';
                    break;
                case 'groen':
                    kleur = '{"on":true, "bri":254, "xy":[0.214,0.709]}';
                    break;
                default :
                    kleur = '{"on":true, "bri":254, "xy":[0.6621,0.3023]}';
            }

            colorFactory.setLight(kleur)
                .success(function () {
                    vm.gelukt = 'Kleur = ' + button;
                })
                .error(function (err, status) {
                    vm.errorMsg = err;
                    vm.status = status;
                });
        };

        vm.registerTeam = function(){
            vm.setTeam()
                .success(function () {
                    vm.gelukt = 'Team geregistreerd';
                })
                .error(function (err, status) {
                    vm.errorMsg = err;
                    vm.status = status;
                });
        };
    }
})();