'use strict';

/**
 * @ngdoc overview
 * @name TmwApp
 * @description
 * # TmwApp
 *
 * Main module of the application.
 */
var tmwApp = angular.module('tmwApp', ['ngResource','tmwControllers','tmwServices','ngRoute','ui.bootstrap','ng-breadcrumbs','ui.router']);

tmwApp.config(function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


    $stateProvider
      .state('about', {
      url:'/category/about',
      templateUrl: 'views/about.html'
     })


      .state('blog', {
        url:'/category/blog',
        templateUrl: 'views/blog.html'
      })

      .state('findus', {
        url:'/category/findus',
        templateUrl: 'views/findus.html'
      })
      .state('home', {
      url:'/',
      templateUrl: 'views/home.html',
      controller: 'tmwHeaderCtrl'
    })
      .state('category', {
      url: '/category/:category',
      templateUrl: 'views/category.html',
      controller: 'tmwCategoryCtrl'
})
  .state('product', {
    url:'/product/:product',
    templateUrl: 'views/productDetail.html',
    controller: 'tmwProductCtrl'
  })


});

/*
tmwApp.config(['$routeProvider',
function($routeProvider) {
$routeProvider.
	when('/', {
		templateUrl: 'views/home.html',
		label: 'Home'
	}).
  when('/category/about', {
    templateUrl: 'views/about.html'
  }).
  when('/category/findus', {
    templateUrl: 'views/findus.html'
  }).
  when('/category/:categoryId', {
    templateUrl: 'views/category.html',
    controller: 'tmwCategoryCtrl'
  }).
  when('/product/:productId', {
    templateUrl: 'views/productDetail.html',
    controller: 'tmwProductCtrl'
  }).
    otherwise({
    redirectTo: '/'
  });

}]);
*/
