'use strict';

/* Controllers */

var tmwControllers = angular.module('tmwControllers', []);

tmwControllers.controller('tmwHeaderCtrl', ['$scope', 'Category',
  function($scope, Category) {
    $scope.header = Category.get({categoryId: 'header'}, function(category) {
      //$scope.mainImageUrl = category.images[0];
    });
    $scope.orderProp = 'age';
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

  tmwControllers.controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  slides.push({image:"images/top-slider/slide_1.jpg", text :'Plants', desc: 'This is full text 1 '});
  slides.push({image:"images/top-slider/slide_2.jpg", text :'Shrubs', desc: 'This is full text 2 '});
  slides.push({image:"images/top-slider/slide_3.jpg", text :'Shrubs', desc: 'This is full text 3'});

  })

