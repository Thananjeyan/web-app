(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController($scope,Authentication) {
    var vm = this;

       $scope.authentication = Authentication;
          $scope.alerts = [
                {
                    icon: 'glyphicon-user',
                    colour: 'btn-success',
                    total: '20,408',
                    description: 'TOTAL CUSTOMERS'

                },
                {
                    icon: 'glyphicon-calendar',
                    colour: 'btn-primary',
                    total: '8,867',
                    description: 'UPCOMING EVENTS'

                },
                {
                    icon: 'glyphicon-edit',
                    colour: 'btn-success',
                    total: '527',
                    description: 'NEW CUSTOMERS IN 24H'

                },
                {
                    icon: 'glyphicon-record',
                    colour: 'btn-info',
                    total: '85,765',
                    description: 'EMAILS SENT'

                },
                {
                    icon: 'glyphicon-eye-open',
                    colour: 'btn-warning',
                    total: '268',
                    description: 'FOLLOW UPS REQUIRED'

                },
                {
                    icon: 'glyphicon-flag',
                    colour: 'btn-danger',
                    total: '348',
                    description: 'TOTAL CUSTOMERS'

                }

              ];


  }
}());
