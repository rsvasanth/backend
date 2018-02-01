(function () {
  'use strict';
  angular
    .module('com.module.customer')
    .config(function ($stateProvider) {
      $stateProvider
        .state('app.customer', {
          abstract: true,
          url: '/customer',
          templateUrl: 'modules/customer/views/main.html'
        })
        .state('app.customer.list', {
          url: '',
          templateUrl: 'modules/customer/views/list.html',
         controllerAs: 'ctrl',
          controller: function (users) {
            console.log('users', users);
            this.users = users;
          },
          resolve: {
            users: function (customerService) {
              console.log('users');
              return customerService.find();
            }
          }
        });
    });

})();
