(function () {
  'use strict';
  angular
    .module('com.module.shipment')
    .run(function ($rootScope,  gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('Shipment'), 'app.shipment.list', 'fa-ship');


    });

})();
