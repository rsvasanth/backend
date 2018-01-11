'use strict';

// to enable these logs set `DEBUG=boot:03-load-content` or `DEBUG=boot:*`
var log = require('debug')('boot:03-load-content');

module.exports = function (app) {

  if (app.dataSources.db.name !== 'Memory' && !process.env.INITDB) {
    return;
  }

  log('Creating categories and products');

  var Category = app.models.Category;
  var Product = app.models.Product;

  Category.findOrCreate(
    {where: {name: 'Haram'}}, // find
    {name: 'Haram'}, // create
    function (err, category, created) {
      if (err) {
        console.error('err', err);
      }
      (created) ? log('created Category', category.name)
        : log('found Category', category.name);
      Product.findOrCreate(
        {where: {name: 'Round Jewel'}}, // find
        {
          name: 'Round Jewel',
          price: '250',
          categoryId: category.id
        }, // create
        function (err, data, created) {
          if (err) {
            console.error('err', err);
          }
          (created) ? log('created Product', data.name)
            : log('found Product', data.name);
        });
      Product.findOrCreate(
        {where: {name: 'Round Neckless'}}, // find
        {
          name: 'Round Neckless',
          price: '350',
          categoryId: category.id
        }, //create
        function (err, data, created) {
          if (err) {
            console.error('err', err);
          }
          (created) ? log('created Product', data.name)
            : log('found Product', data.name);
        });
    });

  Category.findOrCreate({where: {name: 'Bangels'}}, {
    name: 'Bangels'
  }, function (err, category, created) {
    if (err) {
      console.error('err', err);
    }
    (created) ? log('created Category', category.name)
      : log('found Category', category.name);
    Product.findOrCreate({where: {name: 'Red stone Ring'}}, {
      name: 'Red stone ring',
      price: '350',
      categoryId: category.id
    }, function (err, data, created) {
      if (err) {
        console.error('err', err);
      }
      (created) ? log('created Product', data.name)
        : log('found Product', data.name);
    });
    Product.findOrCreate({where: {name: 'White stone ankelet'}}, {
      name: 'White stone wine',
      price: '350',
      categoryId: category.id
    }, function (err, data, created) {
      if (err) {
        console.error('err', err);
      }
      (created) ? log('created Product', data.name)
        : log('found Product', data.name);
    });
  });

};
