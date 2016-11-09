(function() {
    angular.module('app').controller('DashboardController', ['$scope', 'DashboardFactory', function($scope, DashboardFactory) {
        $scope.products = []
        $scope.orders = []
        $scope.customers = []

        function index() {
            DashboardFactory.fetchAll(function(data) {
                $scope.products = data.products
                $scope.orders = data.orders
                $scope.customers = data.customers
            })
        }
        index()
    }])
})()
