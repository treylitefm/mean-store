(function() {
    angular.module('app').controller('ProductsController', ['$scope', 'ProductFactory', function($scope, ProductFactory) {
        $scope.products = []

        function index() {
            ProductFactory.fetchAll(function(data) {
                $scope.products = data
            })
        }

        $scope.add = function() {
            ProductFactory.add($scope.product, function(data) {
                $scope.products = data
            })
        }

        index()
    }])
})()
