(function () {
  'use strict';
  angular
    .module('com.module.orders')
    .run(function ($rootScope, Order, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Orders'), 'app.orders.list', 'fa-file-o');

      Order.find(function (data) {
        $rootScope.addDashboardBox(gettextCatalog.getString('Orders'), 'bg-green', 'ion-clipboard', data.length, 'app.orders.list');
      });

    });

})();
