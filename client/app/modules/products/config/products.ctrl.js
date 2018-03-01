
(function () {
  'use strict';
  angular
    .module('com.module.products')
    .controller('productCtrl', function ($scope,CoreService,SettingService, vendorService,Product,Futures,Category,$state, $log) {
      $scope.action = 'Add';
      $scope.category = [];
      $scope.selectedCategory;
      $scope.product = {};
      $scope.vendor = [];
      $scope.isDisabled = false;
      $scope.metaltype=[];
      $scope.metal_finish=[];
      $scope.stonecolor=[];
      $scope.earringsize=[];
      $scope.necklacelength=[];
      $scope.accessories=[];
        $scope.stonetype=[];

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
Futures.
find().$promise.then((result)=>{
  $scope.metalfinish = result[0].options;
  $scope.metaltype=result[1].options;
  $scope.stonecolor=result[3].options;
    $scope.stonetype=result[4].options;
  $scope.earringsize=result[2].options;
  $scope.necklacelength=result[5].options;
  $scope.accessories=[];
  console.log($scope.metalfinish);
})
vendorService.find().then((result)=>{
  $scope.vendor = result;
})

Futures
.find().$promise.then((futures)=>{
  $scope.futures=futures;
  console.log($scope.futures);
})
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
            metal_finish:$scope.metalFinish,
            meterial_type:$scope.meterialType,
            earring_size:$scope.earringSize,
            stone_color:$scope.stoneColor,
            necklace_length:$scope.necklaceLength,
            stone_type:$scope.stoneType,
            accessories:$scope.product.accessories,
          profit_percent: $scope.product.profit,
            supplier: $scope.product.supplier,
            allow_order: $scope.product.allow_order
          })
          .$promise
          .then(function() {
            $state.go('^.list');
          });
      };

    })     .controller('editproductCtrl', function ($scope,$q,$stateParams,CoreService,Futures, Product,Category,$state, $log) {
      $scope.action = 'Edit';
      $scope.category = [];
      $scope.selectedCategory;
      $scope.metalFinish;
      $scope.futures=[];
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
       Product.findById({ id: $stateParams.productId }).$promise,
       Futures.find().$promise
      ])
      .then(function(data) {
        console.log('this is data from product edit',data)
        var category = $scope.category = data[0];
        $scope.product= data[1];
        $scope.futures = data[2];
        $scope.selectedCategory;
        $scope.metalFinish = $scope.futures[0].options;
  console.log('this is data from product edit',$scope.futures[0].options)
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

  })  .controller('zcategoryaddCtrl', function ($scope,$q,$stateParams,CoreService, Zcategory,Category,$state, $log) {

    $scope.action = 'Add';

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



$scope.submitForm = function() {
Zcategory
    .create({
      name: $scope.category.name,
      image:$scope.photo,

    })
    .$promise
    .then(function() {
      $state.go('^.list');
    });
};
        })   .controller('categoryaddCtrl', function ($scope,$q,$stateParams,CoreService, Zcategory,Category,$state, $log) {

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
Zcategory
  .find()
  .$promise
  .then(function(zcategories) {
    $scope.zcategory = zcategories;
    $scope.selectedZcategory = $scope.selectedZcategory || categories[0];
  });


$scope.submitForm = function() {
Category
    .create({
      name: $scope.category.name,
    zcategoryId: $scope.selectedZcategory.id,
      image:$scope.photo,

    })
    .$promise
    .then(function() {
      $state.go('^.list');
    });
};
        })     .controller('editcategoryCtrl', function ($scope,$q,$stateParams,CoreService,Product, Zcategory,Category,$state, $log) {
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
