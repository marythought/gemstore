(function(){
  var app = angular.module('store-products', []);

  app.directive("productGallery", function() {
    return {
      restrict:"E",
      templateUrl: "product-gallery.html",
      controller: function(){
        this.current = 0;
        this.setCurrent = function(index){
          this.current = index || 0;
        };
      },
      controllerAs: "gallery"
    };
  });

  app.directive('productTabs', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-tabs.html',
      controller: function(){
        this.tab = 1;

        this.setTab = function(setTab) {
          this.tab = setTab;
        };
        this.isSet = function(checkTab){
          return this.tab === checkTab;
        };
      },
      controllerAs: "tab"
    };
  });

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

})();
