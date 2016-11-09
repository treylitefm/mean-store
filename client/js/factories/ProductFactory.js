(function() {
    angular.module('app').factory('ProductFactory', ['$http', function($http){
        var products = []

        function ProductFactory() {
            this.add = function(product, callback) {
                $http.post('/products', product).then(function(data) {
                    if (!data.data.errors) {
                        products = data.data
                        callback(products)
                    }
                })
            }

            this.fetchAll = function(callback) {
                $http.get('/products').then(function(data) {
                    products = data.data
                    callback(products)
                })
            }

            this.fetch = function(id, callback) {
                $http.get('/products/'+id).then(function(data) {
                    callback(data.data)
                })
            }
        }

        return new ProductFactory()
    }])
})()
