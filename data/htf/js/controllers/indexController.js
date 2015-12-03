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
                case 'on':
                    kleur = '{"on":true, "bri":254, "xy":[0.3059,0.3303]}';
                    break;
                case 'off':
                    kleur = '{"on":false}';
                    break;
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
                case 'random':
                    var rndX = Math.random();
                    var rndy = Math.random();
                    kleur = '{"on":true, "bri":254, "xy":[' + rndX + ',' + rndy + ']}';
                    break;
                default :
                    kleur = '{"on":true, "bri":254, "xy":[0.6621,0.3023]}';
            }

            colorFactory.setLight(kleur)
                .success(function () {
                    vm.gelukt = 'Status = ' + button;
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