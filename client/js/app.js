(function() {
    angular.module('app', ['ngRoute']).config(config)

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'client/partials/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/products', {
                templateUrl: 'client/partials/products.html',
                controller: 'ProductsController'
            })
            .when('/orders', {
                templateUrl: 'client/partials/orders.html',
                controller: 'OrdersController'
            })
            .when('/customers', {
                templateUrl: 'client/partials/customers.html',
                controller: 'CustomersController'
            })
            .otherwise('/')
    }
})()
