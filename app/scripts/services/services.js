'use strict';

/* Services */

var tmwServices = angular.module('tmwServices', ['ngResource']);

tmwServices.factory('Category', ['$resource',
  function($resource){
    return $resource('data/:category.json', {}, {
      query: {method:'GET', params:{category:'categories'}, isArray:true}
    });
  }]);

tmwServices.factory('Product', ['$resource',
  function($resource){
    return $resource('data/:product.json', {}, {
      query: {method:'GET', params:{product:'products'}, isArray:true}
    });
  }]);

