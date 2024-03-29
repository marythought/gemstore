(function(){
  var app = angular.module('gemStore', ['store-products']);

  // use this for connecting to an API or outside datasource
  // app.controller('StoreController', [ '$http',function($http){
  //   var store = this;
  //   store.products = [];
  //   $http.get('/products.json').success(function(data){
  //     store.products = data;
  //   });
  // }]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller("ReviewController", function(){
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [{
    name: 'Ruby',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "http://hijk.it/image/0t1y1l3T1226/gem-01.gif",
      "http://hijk.it/image/1i2z0R1g1z0Z/gem-02.gif",
      "http://hijk.it/image/2c3h3m0I3n1c/gem-03.gif",
      "http://hijk.it/image/000Y2p0K2g1i/gem-04.gif",
    ],
    reviews: [
      {
        stars: 5,
        body: "I love it",
        author: "email@email.com",
        createdOn: 1397490980837
      },
      {
        stars: 1,
        body: "I hate it",
        author: "hater@email.com",
        createdOn: 1397490980837
      }
    ]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
          "http://hijk.it/image/1y0p2h0y1Z2g/gem-05.gif",
          "http://hijk.it/image/3l2L0p0d1v1m/gem-06.gif",
          "http://hijk.it/image/1228012u1w2V/gem-07.gif",
        ],
    reviews: [
      {
        stars: 5,
        body: "I love it",
        author: "email@email.com"
      },
      {
        stars: 1,
        body: "I hate it",
        author: "hater@email.com"
      }
    ]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "http://hijk.it/image/000Y2p0K2g1i/gem-04.gif",
      "http://hijk.it/image/3G2J0f231V2w/gem-08.gif",
      "http://hijk.it/image/321Z3m391s02/gem-09.gif"
    ],
  }];

})();
