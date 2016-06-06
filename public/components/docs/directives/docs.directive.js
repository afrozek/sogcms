(function(){
angular
    .module('docs')
    .directive('docsDir', docsDir);

function docsDir() {
	return{
		restrict: 'E',
		templateUrl: '',
		replace: true
		// scope: {}
	}
}

//end IIFE
})();