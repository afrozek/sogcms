(function(){
'use strict'
var app = angular.module('app', ['ui.router', 'ui.bootstrap'])


.config(['$logProvider', function($logProvider){
  $logProvider.debugEnabled(true);
}])





//end IIFE	
})();