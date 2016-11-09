(function() {
    angular.module('app').factory('DashboardFactory', ['$http', function($http){
        var products = []
        var orders = []
        var customers = []

        function DashboardFactory() {
            this.fetchAll = function(callback) {
                $http.get('/dashboard').then(function(data) {
                    orders = data.data.orders
                    products = data.data.products
                    customers = data.data.customers
                    callback(data.data)
                })
            }
        }

        return new DashboardFactory()
    }])
})()
