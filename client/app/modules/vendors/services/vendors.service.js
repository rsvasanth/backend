(function () {
  'use strict';
  angular
    .module('com.module.vendors')
    .service('vendorService', function ($state,$http, CoreService, User, gettextCatalog) {

this.userByroles = function () {
        return User.find({where: {user_type: 'vendor'}, limit: 3}).$promise;
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
