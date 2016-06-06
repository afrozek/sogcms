(function(){
'use strict'

angular
	.module('app')
	.controller('appCtrl', appCtrl)

appCtrl.$inject = ['$log'];

function appCtrl($log) {

	$log.debug("appCtrl injected!")
}
	




//end IIFE
})();