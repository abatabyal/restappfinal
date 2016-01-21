/**
 * Created by ari_69 on 1/21/16.
 */
(function(){

    var directives = angular.module('directives', []);

    directives.directive('reservationsTab', function(){
        var obj = {};
        obj = {
            restrict:'E',
            templateUrl: 'templates/owner-tabs/reservations-tab.tmpl.html'
        };
        console.dir(obj);
        return obj;
    });

    directives.directive('seatingTab', function(){
        var obj = {};
        obj = {
            restrict:'A',
            templateUrl: 'templates/owner-tabs/seating-tab.tmpl.html'
        };
        console.dir(obj);
        return obj;
    });

    directives.directive('profileTab', function(){
        var obj = {};
        obj = {
            restrict:'AE',
            templateUrl: 'templates/owner-tabs/profile-tab.tmpl.html'
        };
        return obj;
    });

    directives.directive('settingsTab', function(){
        var obj = {};
        obj = {
            restrict:'AE',
            templateUrl: 'templates/owner-tabs/settings-tab.tmpl.html'
        };
        console.dir(obj);
        return obj;
    });

    directives.directive('contactsTab', function(){
        var obj = {};
        obj = {
            restrict:'AE',
            templateUrl: 'templates/owner-tabs/contacts-tab.tmpl.html'
        };
        console.dir(obj);
        return obj;
    });

    directives.directive("makeReservationPopup", function(){
        var ddo;
        ddo = {
            restrict: 'AE',

            scope: {confirmationCode: '@confirmationCode',
            	reservationStatus: '@reservationStatus',
                show: '=show'},

            transclude: false,

            link: function(scope, element, attrs) {
                scope.dialogStyle = {};
                if (attrs.width)
                    scope.dialogStyle.width = attrs.width;
                if (attrs.height)
                    scope.dialogStyle.height = attrs.height;
                scope.hideModal = function() {
                    scope.show = false;
                };
            },

            templateUrl: 'templates/makeReservation.tmpl.html',
        };
        return ddo;
    });

    directives.directive("getReservationPopup", function(){
        var ddo;
        ddo = {
            restrict: 'AE',

            scope: {matchedReservation: '=matchedReservation',
            show: '=show',
            deleteReservation: '&deleteReservation',
            editReservation: '&editReservation'},

            transclude: false,

            link: function(scope, element, attrs) {
                scope.dialogStyle = {};
                if (attrs.width)
                    scope.dialogStyle.width = attrs.width;
                if (attrs.height)
                    scope.dialogStyle.height = attrs.height;
                scope.hideModal = function() {
                    scope.show = false;
                };
            },

            templateUrl: 'templates/getReservation.tmpl.html',
        };
        return ddo;
    });

})();