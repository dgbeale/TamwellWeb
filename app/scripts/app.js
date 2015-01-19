'use strict';

/**
 * @ngdoc overview
 * @name TmwApp
 * @description
 * # TmwApp
 *
 * Main module of the application.
 */
var tmwApp = angular.module('tmwApp', ['ngResource','tmwControllers','tmwServices','ngRoute','ui.bootstrap','ng-breadcrumbs']);

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
