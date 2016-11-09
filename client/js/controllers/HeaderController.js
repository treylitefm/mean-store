(function() {
    angular.module('app').controller('HeaderController', ['$scope', '$location', function($scope, $location) {
        $scope.getClass = function (path) {
              return ($location.path() === path) ? 'active' : '';
        }
    }])

})()
