
(function () {
  'use strict';
  angular
    .module('com.module.products')
    .controller('productCtrl', function ($scope,FileUploader,CoreService, Product,Category,$state, $log) {

      $scope.uploader = new FileUploader({
        url: CoreService.env.apiUrl + '/containers/files/upload',
        formData: [
          {
            key:'value'
          }
        ]
      });
      $scope.action = 'Add';
      $scope.category = [];
      $scope.selectedCategory;
      $scope.product = {};
      $scope.isDisabled = false;

      Category
        .find()
        .$promise
        .then(function(categories) {
          $scope.category = categories;
          $scope.selectedCategory = $scope.selectedCategory || categories[0];
        });

      $scope.submitForm = function() {
        Product
          .create({
            name: $scope.product.name,
            description: $scope.product.description,
            ref_no: $scope.product.ref_no,
            supplier_ref_no: $scope.product.supplier_ref_no,
            futures: $scope.product.futures,
            weight: $scope.product.weight,
          shipping_charge: $scope.product.shipping_charge,
          categoryId: $scope.selectedCategory.id,
            stock: $scope.product.stock,
            price: $scope.product.price,
            image:  $scope.uploader,
          profit_percent: $scope.product.profit,
            supplier: $scope.product.supplier,
            allow_order: $scope.product.allow
          })
          .$promise
          .then(function() {
            $state.go('^.list');
          });
      };

    })

})();
