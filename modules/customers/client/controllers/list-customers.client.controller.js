(function () {
  'use strict';

  angular
    .module('customers')
    .controller('CustomersListController', CustomersListController);

  CustomersListController.$inject = ['$scope', '$state', 'CustomersService'];

  function CustomersListController($scope, $state, CustomersService) {
    var vm = this;

    vm.customers = CustomersService.query();
  }


// Clicking Bew Customer button in Lkist page
  angular
  .module('customers')
  .directive('mydirc', mydirc );

  mydirc.$inject = ['$state'];
  
  function mydirc($state) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function($scope, element, attrs) {
            $scope.clickMe= function() {
                //alert('inside click');
                $state.go('customers.create');
            }
        }
    }
};

}());
