(function () {
  'use strict';
  angular
    .module('com.module.customer')
    .service('customerService', function ($state,$http, CoreService, User, gettextCatalog) {

this.userByroles = function () {
        return User.find({where: {user_type: 'customer'},}).$promise;
      };
      
    this.find = function () {
    return User.find({   filter: {
        include: [
          'roles'
        ]
      }}).$promise;
      };
    });

})();
