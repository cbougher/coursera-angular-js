(function() {
  'use strict';

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  ;

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyCtrl = this;

    toBuyCtrl.toBuy = ShoppingListCheckOffService.getToBuy();

    toBuyCtrl.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    } 
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtCtrl = this;

    boughtCtrl.bought = ShoppingListCheckOffService.getBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuy = [
      { name: "cookies",  quantity: 10 },
      { name: "cakes",    quantity: 2  },
      { name: "chips",    quantity: 4  },
      { name: "pretzels", quantity: 8  },
      { name: "peanuts",  quantity: 1  }    
    ];

    var bought = [];

    service.buyItem = function(index) {
      var item = toBuy.splice(index, 1);
      bought.push(item[0]);
    }

    service.getToBuy = function() {
      return toBuy;
    }

    service.getBought = function() {
      return bought;
    }
  }

})();