(function(){
	'use strict'

	angular
    	.module('docs')
    	.factory('docsService', docsService);

    docsService.$inject = []

    function docsService() {
    	var service = {

    		error: error,
    		info: info,
    		success: success

    	};

    	return service;

    	////////////

    	function error() {
	      /* */
	    }

	    function info() {
	      /* */
          console.log("docsService");
	    }

	    function success() {
	      /* */
	    }


    }

	
// end IIFE
})();
