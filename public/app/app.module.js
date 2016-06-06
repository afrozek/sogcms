(function(){
'use strict'
var app = angular.module('app', ['ui.router', 'ui.bootstrap','docs'])


.config(['$logProvider', function($logProvider){
  $logProvider.debugEnabled(true);
}])





//end IIFE	
})();