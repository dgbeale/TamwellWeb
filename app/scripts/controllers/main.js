'use strict';

/* Controllers */

var tmwControllers = angular.module('tmwControllers', []);

tmwControllers.controller('tmwHeaderCtrl', ['$scope', 'Category','$stateParams','breadcrumbs',
  function($scope,Category,$stateParams,breadcrumbs) {
    $scope.breadcrumbs = breadcrumbs;
    $scope.category = $stateParams.category;

    $scope.header = Category.get({category: 'header'}, function(cat) {
      //$scope.mainImageUrl = category.images[0];
      $scope.myInterval = 3000;
      console.log(" HEADER " + $scope.header.name );

      $scope.slides = [];
      $scope.slides.push($scope.header.sliders[0]);
      $scope.slides.push($scope.header.sliders[1]);

    });

  }]);

 tmwControllers.controller('tmwHomeCtrl', ['$scope', 'Category',
  function($scope, Category) {
    $scope.header.showBreadcrumb=false;

  }]);

 tmwControllers.controller('tmwCategoryCtrl', ['$scope','$stateParams','Category',
  function($scope, $stateParams,Category) {
    $scope.category = $stateParams.category;
    $scope.cat = Category.get({category: $scope.category}, function(category) {
     // $scope.mainImageUrl = phone.images[0];
      $scope.header.showBreadcrumb=true;

      if ($scope.cat.thumbnail == "") {
        $scope.cat.thumbnail = "images/ggn/thumbnail/default.jpg";
      }
      $scope.cat.children.forEach(function(child) {
        if (child.thumbnail == "") {
          child.thumbnail = "images/ggn/thumbnail/default.jpg";
        }
      });
      $scope.header.breadcrumb = $scope.cat.breadcrumb;
	 });

  }]);

   tmwControllers.controller('tmwProductCtrl', ['$scope','$stateParams','Product',
  function($scope, $stateParams, Product) {
    $scope.product = $stateParams.product;

    $scope.prod = Product.get({product: $scope.product}, function(product) {
      // $scope.mainImageUrl = phone.images[0];
      $scope.header.showBreadcrumb=true;
      if ( $scope.prod.images.length == 0)
      {
        $scope.prod.images.push("images/ggn/large/default.jpg");
      }
      $scope.header.breadcrumb = $scope.prod.breadcrumb;
    });

  }]);

  tmwControllers.controller('CarouselCtrl', function ($scope) {

  })

