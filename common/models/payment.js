'use strict';

module.exports = function(Payment) {
    
  Payment.pay = function(card,amount, cb) {
      if(amount){
          cb(null, 'Card details.. ' + card+' :some of:'+amount); 
          return true;
      }else{
           cb(null, 'Card details.. ' + card+' :some of:'+amount); 
          
          return false;
      }
     
    }

    Payment.remoteMethod('pay', {
          accepts: [{arg: 'card', type: 'string'},{arg: 'amount', type: 'string'}],
          returns: [{arg: 'payment', type: 'string'},{arg: 'status', type: 'string'}]
    });
    
};
