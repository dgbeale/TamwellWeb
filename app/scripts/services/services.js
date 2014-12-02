'use strict';

/* Services */

var tmwServices = angular.module('tmwServices', ['ngResource']);

tmwServices.factory('Category', ['$resource',
  function($resource){
    return $resource('data/categories/:categoryId.json', {}, {
      query: {method:'GET', params:{categoryId:'categories'}, isArray:true}
    });
  }]);

tmwServices.factory('Product', ['$resource',
  function($resource){
    return $resource('data/products/:productId.json', {}, {
      query: {method:'GET', params:{productId:'products'}, isArray:true}
    });
  }]);

/*
tmwServices.factory('breadcrumbs', ['$rootScope', '$location', function($rootScope, $location){

  var breadcrumbs = [];
  var breadcrumbsService = {};

  //we want to update breadcrumbs only when a route is actually changed
  //as $location.path() will get updated imediatelly (even if route change fails!)
  $rootScope.$on('$routeChangeSuccess', function(event, current){

    var pathElements = $location.path().split('/'), result = [], i;
    var breadcrumbPath = function (index) {
      return '/' + (pathElements.slice(0, index + 1)).join('/');
    };

    pathElements.shift();
    for (i=0; i<pathElements.length; i++) {
      result.push({name: pathElements[i], path: breadcrumbPath(i)});
    }

    breadcrumbs = result;
  });

  breadcrumbsService.getAll = function() {
    return breadcrumbs;
  };

  breadcrumbsService.getFirst = function() {
    return breadcrumbs[0] || {};
  };

  return breadcrumbsService;
}]);
*/
