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
