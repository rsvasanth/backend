'use strict';

// to enable these logs set `DEBUG=boot:01-load-settings` or `DEBUG=boot:*`
var log = require('debug')('boot:02-load-futures');

module.exports = function(app) {

  var Futures = app.models.Futures;

  function loadDefaultFutures() {
    console.error('Creating default Futures');

    var futures = [ {
      type: 'select',
      key: 'metalFinish',
      value: '--',
      options: [
        'Antic',
        'Gold',
        'Gold & Rhodium',
        'Rhodium'
      ]
    },{
      type: 'select',
      key: 'metalType',
      value: '--',
      options: [
        'Alloy',
        'Alloy & Sliver',
        'Copper',
        'Gold',
        'Silver'
      ]
    },{
      type: 'select',
      key: 'earringSize',
      value: 'skin-blue',
      options: [
        'skin-blue',
        'skin-black'
      ]
    },{
      type: 'select',
      key: 'stoneColor',
      value: 'skin-blue',
      options: [
      '  Black',
        'Blue',
      '  Gold Color',
      '  Green',
      '  Multi Color stone',
      'pink',
      'Red',
      'Ruby Red',
      'Sea Blue',
      'Violet',
      'White',
      'Yellow'
      ]
    },{
      type: 'select',
      key: 'stoneType',
      value: 'skin-blue',
      options: [
        'Ad stone',
  'CZ Stone',
  'Emerald',
  'Kempu',
  'Kundan',
'  Multi Color Stone',
'  No stone',
  'Poliki',
'  Ruby'
      ]
    },{
      type: 'select',
      key: 'necklaceLength',
      value: 'skin-blue',
      options: [
        '5 Inches',
        '6 Inches',
        '7 Inches',
        '8 Inches',
      '9 Inches',
      '10 Inches',
      '11 Inches',
        '12 Inches',
        '14 Inches'
      ]
    }];

    futures.forEach(function(future) {
    Futures.create(future, function(err) {
        if (err) {
          console.error(err);
        }
      });
    });
  }

  function loadExistingFutures() {
    console.error('Loading existing Futuress');

    Futures.find(function(data) {
      log(data);
    });
  }


  Futures.count(function(err, result) {
    if (err) {
      console.error(err);
    }
    if (result < 1) {
      loadDefaultFutures();
    } else {
      loadExistingFutures();
    }
  });


};
