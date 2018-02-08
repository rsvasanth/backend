(function () {
  'use strict';
  angular
    .module('com.module.shipment')
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.shipment', {
          abstract: true,
          url: '/shipment',
          templateUrl: 'modules/shipment/views/main.html'
        })
        .state('app.shipment.list', {
          url: '',
          templateUrl: 'modules/shipment/views/list.html'

        })

        .state('app.shipment.view', {
          url: '/:id',
          templateUrl: 'modules/shipment/views/view.html'

        })
        .state('app.shipment.delete', {
          url: '/:id/delete',
          template: ''
          });
    });

})();
