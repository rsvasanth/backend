(function () {
  'use strict';
  angular
    .module('com.module.vendors')
    .run(function ($rootScope, Order, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Vendors'), 'app.vendors.list', 'fa-file-o');



    });

})();
