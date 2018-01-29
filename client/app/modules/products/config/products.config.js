(function () {
  'use strict';
  angular
    .module('com.module.products')
    .run(function ($rootScope, Product, Category, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Products'), 'app.products.list', 'fa-photo');

      Product.find(function (data) {
        $rootScope.addDashboardBox(gettextCatalog.getString('Products'), 'bg-yellow', 'ion-paperclip', data.length, 'app.products.list');
      });

      Category.find(function (data) {
        $rootScope.addDashboardBox(gettextCatalog.getString('Categories'), 'bg-aqua', 'ion-paperclip', data.length, 'app.products.list');
      });

    });

})();
