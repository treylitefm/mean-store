(function() {
    angular.module('app').controller('OrdersController', ['$scope', 'ProductFactory', 'CustomerFactory', 'OrderFactory', function($scope, ProductFactory, CustomerFactory, OrderFactory) {
        $scope.customers = []
        $scope.products = []
        $scope.order = {}

        function index() {
            CustomerFactory.fetchAll(function(data) {
                $scope.customers = data
            })
            ProductFactory.fetchAll(function(data) {
                $scope.products = data
            })
            OrderFactory.fetchAll(function(data) {
                $scope.orders = data
            })
        }

        $scope.add = function() {
            OrderFactory.add($scope.order, function(data) {
                $scope.orders = data
                $scope.order = {}
            })
        }

        index()
    }])
})()
