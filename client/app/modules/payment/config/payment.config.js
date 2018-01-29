(function () {
  'use strict';
  angular
    .module('com.module.payment')
    .run(function ($rootScope,  gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Payment'), 'app.payment.list', 'fa-credit-card');


    });

})();
