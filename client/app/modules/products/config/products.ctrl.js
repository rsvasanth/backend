
(function () {
  'use strict';
  angular
    .module('com.module.products')
    .controller('productCtrl', function ($scope,CoreService, Product,Category,$state, $log) {
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

    })     .controller('editproductCtrl', function ($scope,$q,$stateParams,CoreService, Product,Category,$state, $log) {
      $scope.action = 'Edit';
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
 
      
    $q
      .all([
      Category.find().$promise,
       Product.findById({ id: $stateParams.productId }).$promise
      ])
      .then(function(data) {
        console.log('this is data from product edit',data)
        var category = $scope.category = data[0];
        $scope.product= data[1];
        $scope.selectedCategory;

        var selectedCategoryIndex = category
          .map(function(category) {
            return category.id;
          })
          .indexOf($scope.product.categoryId);
        $scope.selectedCategory = category[selectedCategoryIndex];
      });
      
          $scope.submitForm = function() {
     $scope.product.image = $scope.photo;
      $scope.product.categoryId = $scope.selectedCategory.id;
      $scope.product
        .$save()
        .then(function(product) {
          $state.go('^.list');
        });
    };

    }).controller('editcategoryCtrl', function ($scope,$q,$stateParams,CoreService,Product, Zcategory,Category,$state, $log) {
            $scope.action = 'Edit';
      $scope.zcategory = [];
      $scope.selectedZcategory;
      $scope.category = {};
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
         $q
      .all([
      Zcategory.find().$promise,
       Category.findById({ id: $stateParams.categoryId }).$promise
      ])
      .then(function(data) {
        console.log('this is data from cate edit',data)
        var zcategory = $scope.zcategory = data[0];
        $scope.category= data[1];
        $scope.selectedZcategory;

        var selectedZcategoryIndex = zcategory
          .map(function(zcategory) {
            return zcategory.id;
          })
          .indexOf($scope.category.zcategoryId);
        $scope.selectedZcategory = zcategory[selectedZcategoryIndex];
      });
          $scope.submitForm = function() {
     $scope.category.image = $scope.photo;
      $scope.category.zcategoryId = $scope.selectedZcategory.id;
      $scope.category
        .$save()
        .then(function(category) {
          $state.go('^.list');
        });
    };
    })

})();
