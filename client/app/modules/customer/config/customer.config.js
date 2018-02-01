(function () {
  'use strict';
  angular
    .module('com.module.customer')
    .run(function ($rootScope, Order, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Customer'), 'app.customer.list', 'fa-file-o');



    });

})();
