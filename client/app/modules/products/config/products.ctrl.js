
(function () {
  'use strict';
  angular
    .module('com.module.products')
    .controller('productCtrl', function ($scope,FileUploader,CoreService, Product,Category,$state, $log) {


      $scope.action = 'Add';
      $scope.category = [];
      $scope.selectedCategory;
      $scope.product = {};
      $scope.isDisabled = false;
$scope.previewPhoto =function(event){
var files = event.target.files;
var file = files[files.length-1];
var reader = new FileReader();
reader.onload = function (e) {
  $scope.$apply(function() {
    $scope.photo = e.target.result;
  })
}
reader.readAsDataURL(file);
};
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
              gst: $scope.product.gst,
            image:$scope.photo,
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
