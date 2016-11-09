(function() {
    angular.module('app').factory('CustomerFactory', ['$http', function($http){
        var customers = []

        function CustomerFactory() {
            this.add = function(customer, callback) {
                $http.post('/customers', customer).then(function(data) {
                    if (!data.data.errors) {
                        customers = data.data
                        callback(customers)
                    }
                })
            }

            this.remove = function(id, callback) {
                $http.delete('/customers/'+id).then(function(data) {
                    if (!data.data.errors) {
                        customers = data.data
                        callback(customers)
                    }
                })
            }

            this.fetchAll = function(callback) {
                $http.get('/customers').then(function(data) {
                    customers = data.data
                    callback(customers)
                })
            }

            this.fetch = function(id, callback) {
                $http.get('/customers/'+id).then(function(data) {
                    callback(data.data)
                })
            }
        }

        return new CustomerFactory()
    }])
})()
