(function () {
  'use strict';
  angular
    .module('com.module.products')
    .service('CategoriesService', function (CoreService, Zcategory,Category, gettextCatalog) {

      this.getZcategories = function () {
        return Zcategory.find({   }).$promise;
      };

      this.getZcategory = function (categoryId) {
        return Zcategory.findById({
          id: categoryId
        }).$promise;
      };

      this.getCategories = function () {
        return Category.find({
          filter: {
            order: 'created DESC',
            include: [
              'products'
            ]
          }
        }).$promise;
      };

      this.getCategory = function (categoryId) {
        return Category.findById({
          id: categoryId
        }).$promise;
      };

      this.upsertCategory = function (category) {
        return Category.upsert(category).$promise
          .then(function () {
            CoreService.toastSuccess(
              gettextCatalog.getString('Category saved'),
              gettextCatalog.getString('Your category is safe with us!')
            );
          })
          .catch(function (err) {
            CoreService.toastSuccess(
              gettextCatalog.getString('Error saving category '),
              gettextCatalog.getString('This category could no be saved: ') + err
            );
          }
        );
      };

      this.deleteCategory = function (id, successCb, cancelCb) {
        CoreService.confirm(
          gettextCatalog.getString('Are you sure?'),
          gettextCatalog.getString('Deleting this cannot be undone'),
          function () {
            Category.deleteById({id: id}, function () {
              CoreService.toastSuccess(
                gettextCatalog.getString('Category deleted'),
                gettextCatalog.getString('Your category is deleted!'));
              successCb();
            }, function (err) {
              CoreService.toastError(
                gettextCatalog.getString('Error deleting category'),
                gettextCatalog.getString('Your category is not deleted! ') + err);
              cancelCb();
            });
          },
          function () {
            cancelCb();
          }
        );
      };

      this.getFormFields = function (zcategory) {
        var catOptions = zcategory.map(function (category) {
          return {
            name: category.name,
            value: category.id
          };
        });
        return [
          {
            key: 'name',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Name'),
              required: true
            }
          },
          {
            key: 'zcategoryId',
            type: 'select',
            templateOptions: {
              label: gettextCatalog.getString('Z Cat Name'),
              required: true,
              options:catOptions
            }
          },
          {
            key: 'image',
            type: 'input',
            templateOptions: {
              label: gettextCatalog.getString('Picture')


            }
          }
        ];
      };

    });

})();
