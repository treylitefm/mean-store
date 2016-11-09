(function() {
    angular.module('app').factory('OrderFactory', ['$http', function($http){
        var orders = []

        function OrderFactory() {
            this.add = function(order, callback) {
                $http.post('/orders', order).then(function(data) {
                    if (!data.data.errors) {
                        orders = data.data
                        callback(orders)
                    }
                })
            }

            this.fetchAll = function(callback) {
                $http.get('/orders').then(function(data) {
                    orders = data.data
                    callback(orders)
                })
            }

            this.fetch = function(id, callback) {
                $http.get('/orders/'+id).then(function(data) {
                    callback(data.data)
                })
            }
        }

        return new OrderFactory()
    }])
})()
