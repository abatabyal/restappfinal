/**
 * Created by ari_69 on 1/21/16.
 */

(function(){
    var app = angular.module('restappfinal', [
        'ngRoute',
        'ngMessages',
        'ngAnimate',
        'controllers'
    ]);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            //home page
            .when('/home.tmpl', {
                templateUrl: 'templates/home.tmpl.html',

            })

            .when('/customer.tmpl', {
                templateUrl: 'templates/customer.tmpl.html',
                controller: 'CustomerController',
                controllerAs: 'customerCtrl'
            })

            .when('/ownerLogin.tmpl', {
                templateUrl: 'templates/ownerLogin.tmpl.html',
                controller: 'OwnerController',
                controllerAs: 'ownerCtrl'
            })

            .when('/owner.tmpl', {
                templateUrl: 'templates/owner.tmpl.html',
                controller: 'OwnerController',
                controllerAs: 'ownerCtrl1'
            })
            .when('/editReservation.tmpl', {
                templateUrl: 'templates/editReservation.tmpl.html',
                controller: 'CustomerController',
                controllerAs: 'customerCtrl1'
            })
            .otherwise({
                redirectTo: '/home.tmpl'
            })

    }])

})();