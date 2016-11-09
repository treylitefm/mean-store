(function() {
    angular.module('app').controller('CustomersController', ['$scope', 'CustomerFactory', function($scope, CustomerFactory) {
        $scope.customers = []
        $scope.customer = {}

        function index() {
            CustomerFactory.fetchAll(function(data) {
                $scope.customers = data
            })
        }

        $scope.add = function() {
            CustomerFactory.add($scope.customer, function(data) {
                $scope.customers = data
                $scope.customer = {}
            })
        }

        $scope.remove = function(id) {
            CustomerFactory.remove(id, function(data) {
                $scope.customers = data
            })
        }

        index()
    }])
})()
