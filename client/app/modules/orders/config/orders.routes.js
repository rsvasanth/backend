(function () {
  'use strict';
  angular
    .module('com.module.orders')
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.orders', {
          abstract: true,
          url: '/orders',
          templateUrl: 'modules/orders/views/main.html'
        })
        .state('app.orders.list', {
          url: '',
          templateUrl: 'modules/orders/views/list.html',
          controllerAs: 'ctrl',
          controller: function (orders) {
            this.orders = orders;
          },
          resolve: {
            orders: function (OrdersService) {
              return OrdersService.getOrders();
            }
          }
        })

        .state('app.orders.view', {
          url: '/:id',
          templateUrl: 'modules/orders/views/view.html',
          controllerAs: 'ctrl',
          controller: function (order) {
            this.order = order;
          },
          resolve: {
            order: function ($stateParams, OrdersService) {
              return OrdersService.getOrder($stateParams.id);
            }
          }
        })
        .state('app.orders.delete', {
          url: '/:id/delete',
          template: '',
          controllerAs: 'ctrl',
          controller: function ($state, OrdersService, order) {
          OrdersService.deleteOrder(order.id, function () {
              $state.go('^.list');
            }, function () {
              $state.go('^.list');
            });
          },
          resolve: {
            order: function ($stateParams, OrdersService) {
              return OrdersService.getOrder($stateParams.id);
            }
          }
        });
    });

})();
