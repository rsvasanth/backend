(function () {
  'use strict';
  angular
    .module('com.module.vendors')
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.vendors', {
          abstract: true,
          url: '/vendors',
          templateUrl: 'modules/vendors/views/main.html'
        })
        .state('app.vendors.list', {
          url: '',
          templateUrl: 'modules/vendors/views/list.html',
         controllerAs: 'ctrl',
          controller: function (users) {
            console.log('users', users);
            this.users = users;
          },
          resolve: {
            users: function (vendorService) {
              console.log('users');
              return vendorService.find();
            }
          }
        });
    });

})();
