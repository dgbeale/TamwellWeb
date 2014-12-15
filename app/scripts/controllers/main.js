'use strict';

/* Controllers */

var tmwControllers = angular.module('tmwControllers', []);

tmwControllers.controller('tmwHeaderCtrl', ['$scope', 'Category',
  function($scope, Category) {
    $scope.header = Category.get({categoryId: 'header'}, function(category) {
      //$scope.mainImageUrl = category.images[0];
    });

    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    slides.push($scope.header.slides[0]);
    slides.push($scope.header.slides[1]);
    slides.push($scope.header.slides[2]);

  }]);

 tmwControllers.controller('tmwHomeCtrl', ['$scope', 'Category',
  function($scope, Category) {

  }]);

 tmwControllers.controller('tmwCategoryCtrl', ['$scope', '$routeParams','Category',
  function($scope, $routeParams, Category) {
    $scope.category = Category.get({categoryId: $routeParams.categoryId}, function(category) {
     // $scope.mainImageUrl = phone.images[0];
	 });
  }]);

   tmwControllers.controller('tmwProductCtrl', ['$scope', '$routeParams','Product',
  function($scope, $routeParams, Product) {
    $scope.product = Product.get({productId: $routeParams.productId}, function(product) {
      // $scope.mainImageUrl = phone.images[0];
    });
  }]);

  tmwControllers.controller('CarouselCtrl', function ($scope) {

  })

