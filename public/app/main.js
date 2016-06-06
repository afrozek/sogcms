(function(){
	'use strict'

angular
	.module('docs', [
	  
	]);

})();


(function(){
	'use strict'

angular
	.module('sample', [
	  
	]);

})();


(function() {
	'use strict'

	angular
		.module('docs')
		.controller('docsCtrl', docsCtrl)

	docsCtrl.$inject = []

	function docsCtrl() {

	    var vm = this;

	    vm.gotoSession = gotoSession;
	    vm.refresh = refresh;
	    vm.search = search;
	    vm.sessions = [];
	    vm.title = 'docs';

	    ////////////

	    function gotoSession() {
	      /* */
	    }

	    function refresh() {
	      /* */
	    }

	    function search() {
	      /* */
	    }
	}


//end IIFE
})();



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

(function() {
	'use strict'

	angular
		.module('sample')
		.controller('sampleCtrl', sampleCtrl)

	sampleCtrl.$inject = []

	function sampleCtrl() {

	    var vm = this;

	    vm.gotoSession = gotoSession;
	    vm.refresh = refresh;
	    vm.search = search;
	    vm.sessions = [];
	    vm.title = 'Sample';

	    ////////////

	    function gotoSession() {
	      /* */
	    }

	    function refresh() {
	      /* */
	    }

	    function search() {
	      /* */
	    }
	}


//end IIFE
})();



(function(){
angular
    .module('sample')
    .directive('sampleDir', sampleDir);

function sampleDir() {
	return{
		restrict: 'E',
		templateUrl: '',
		replace: true
		// scope: {}
	}
}

//end IIFE
})();
(function(){
	'use strict'

	angular
    	.module('sample')
    	.factory('sampleService', sampleService);

    sampleService.$inject = []

    function sampleService() {
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
          console.log("sampleService");
	    }

	    function success() {
	      /* */
	    }


    }

	
// end IIFE
})();

(function(){
'use strict'
var app = angular.module('app', ['ui.router', 'ui.bootstrap','docs'])


.config(['$logProvider', function($logProvider){
  $logProvider.debugEnabled(true);
}])





//end IIFE	
})();
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
(function(){


angular.module('app')
	.config(['$urlRouterProvider','$stateProvider','$httpProvider',function($urlRouterProvider, $stateProvider, $httpProvider){
		
		$urlRouterProvider.otherwise('docs');
		//states
		$stateProvider

		// .decorator('path', function(state, parentFn) {
		// 	//console.log("configuring states")	
		// 	if (state.self.resolve === undefined) {
		// 		state.self.resolve = {};
		// 		state.resolve = state.self.resolve;
		// 	}
		// 	return parentFn(state);
  //        })

		.state('app',{
			abstract: true,
			templateUrl:'app/views/app.view.html',
			controller: 'appCtrl',
			controllerAs: 'app'

		})

		// .state('app.home',{
		// 	url: '/home',
		// 	template: '<h1> home view </h1>',
		// 	templateUrl:'components/home/views/app.home.html',
		// 	// controller: 'homeCtrl',
		// 	// controllerAs: 'home',
		// 	data: {
		// 		permission: false,
		// 		permissionLevel: ['everyone']
		// 	}
		// })

		.state('app.docs',{
			url: '/docs',
			templateUrl:'components/docs/views/docs.view.html',
			controller: 'docsCtrl',
			controllerAs: 'docs',
			data: {
				permission: false,
				permissionLevel: ['everyone']
			}
		})

		// .state('app.register',{
		// 	url: '/register',
		// 	templateUrl:'components/register/views/register.view.html',
		// 	controller: 'registerCtrl',
		// 	controllerAs: 'register',
		// 	data: {
		// 		permission: false,
		// 		permissionLevel: ['everyone']
		// 	}
		// })

		// .state('app.members',{
		// 	url: '/members',
		// 	templateUrl:'components/members/views/members.home.html',
		// 	controller: 'membersCtrl',
		// 	controllerAs: 'members',
		// 	data: {
		// 		permission: true,
		// 		permissionLevel: ['admin','member']
		// 	}
		// })


		//$httpProvider.interceptors.push('authInterceptor');



	}]);




//end IIFE	
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3MvZG9jcy5tb2R1bGUuanMiLCJzYW1wbGVDb21wb25lbnQvc2FtcGxlLm1vZHVsZS5qcyIsImRvY3MvY29udHJvbGxlcnMvZG9jcy5jb250cm9sbGVyLmpzIiwiZG9jcy9kaXJlY3RpdmVzL2RvY3MuZGlyZWN0aXZlLmpzIiwiZG9jcy9zZXJ2aWNlcy9kb2NzLnNlcnZpY2UuanMiLCJzYW1wbGVDb21wb25lbnQvY29udHJvbGxlcnMvc2FtcGxlLmNvbnRyb2xsZXIuanMiLCJzYW1wbGVDb21wb25lbnQvZGlyZWN0aXZlcy9zYW1wbGUuZGlyZWN0aXZlLmpzIiwic2FtcGxlQ29tcG9uZW50L3NlcnZpY2VzL3NhbXBsZS5zZXJ2aWNlLmpzIiwiYXBwLm1vZHVsZS5qcyIsImNvbnRyb2xsZXJzL2FwcC5jb250cm9sbGVyLmpzIiwicm91dGVzL2FwcC5yb3V0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwdWJsaWMvYXBwL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtcblx0J3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXJcblx0Lm1vZHVsZSgnZG9jcycsIFtcblx0ICBcblx0XSk7XG5cbn0pKCk7XG5cbiIsIihmdW5jdGlvbigpe1xuXHQndXNlIHN0cmljdCdcblxuYW5ndWxhclxuXHQubW9kdWxlKCdzYW1wbGUnLCBbXG5cdCAgXG5cdF0pO1xuXG59KSgpO1xuXG4iLCIoZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0J1xuXG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCdkb2NzJylcblx0XHQuY29udHJvbGxlcignZG9jc0N0cmwnLCBkb2NzQ3RybClcblxuXHRkb2NzQ3RybC4kaW5qZWN0ID0gW11cblxuXHRmdW5jdGlvbiBkb2NzQ3RybCgpIHtcblxuXHQgICAgdmFyIHZtID0gdGhpcztcblxuXHQgICAgdm0uZ290b1Nlc3Npb24gPSBnb3RvU2Vzc2lvbjtcblx0ICAgIHZtLnJlZnJlc2ggPSByZWZyZXNoO1xuXHQgICAgdm0uc2VhcmNoID0gc2VhcmNoO1xuXHQgICAgdm0uc2Vzc2lvbnMgPSBbXTtcblx0ICAgIHZtLnRpdGxlID0gJ2RvY3MnO1xuXG5cdCAgICAvLy8vLy8vLy8vLy9cblxuXHQgICAgZnVuY3Rpb24gZ290b1Nlc3Npb24oKSB7XG5cdCAgICAgIC8qICovXG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIHJlZnJlc2goKSB7XG5cdCAgICAgIC8qICovXG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIHNlYXJjaCgpIHtcblx0ICAgICAgLyogKi9cblx0ICAgIH1cblx0fVxuXG5cbi8vZW5kIElJRkVcbn0pKCk7XG5cblxuIiwiKGZ1bmN0aW9uKCl7XG5hbmd1bGFyXG4gICAgLm1vZHVsZSgnZG9jcycpXG4gICAgLmRpcmVjdGl2ZSgnZG9jc0RpcicsIGRvY3NEaXIpO1xuXG5mdW5jdGlvbiBkb2NzRGlyKCkge1xuXHRyZXR1cm57XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHR0ZW1wbGF0ZVVybDogJycsXG5cdFx0cmVwbGFjZTogdHJ1ZVxuXHRcdC8vIHNjb3BlOiB7fVxuXHR9XG59XG5cbi8vZW5kIElJRkVcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG5cdCd1c2Ugc3RyaWN0J1xuXG5cdGFuZ3VsYXJcbiAgICBcdC5tb2R1bGUoJ2RvY3MnKVxuICAgIFx0LmZhY3RvcnkoJ2RvY3NTZXJ2aWNlJywgZG9jc1NlcnZpY2UpO1xuXG4gICAgZG9jc1NlcnZpY2UuJGluamVjdCA9IFtdXG5cbiAgICBmdW5jdGlvbiBkb2NzU2VydmljZSgpIHtcbiAgICBcdHZhciBzZXJ2aWNlID0ge1xuXG4gICAgXHRcdGVycm9yOiBlcnJvcixcbiAgICBcdFx0aW5mbzogaW5mbyxcbiAgICBcdFx0c3VjY2Vzczogc3VjY2Vzc1xuXG4gICAgXHR9O1xuXG4gICAgXHRyZXR1cm4gc2VydmljZTtcblxuICAgIFx0Ly8vLy8vLy8vLy8vXG5cbiAgICBcdGZ1bmN0aW9uIGVycm9yKCkge1xuXHQgICAgICAvKiAqL1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBpbmZvKCkge1xuXHQgICAgICAvKiAqL1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9jc1NlcnZpY2VcIik7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG5cdCAgICAgIC8qICovXG5cdCAgICB9XG5cblxuICAgIH1cblxuXHRcbi8vIGVuZCBJSUZFXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCdcblxuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnc2FtcGxlJylcblx0XHQuY29udHJvbGxlcignc2FtcGxlQ3RybCcsIHNhbXBsZUN0cmwpXG5cblx0c2FtcGxlQ3RybC4kaW5qZWN0ID0gW11cblxuXHRmdW5jdGlvbiBzYW1wbGVDdHJsKCkge1xuXG5cdCAgICB2YXIgdm0gPSB0aGlzO1xuXG5cdCAgICB2bS5nb3RvU2Vzc2lvbiA9IGdvdG9TZXNzaW9uO1xuXHQgICAgdm0ucmVmcmVzaCA9IHJlZnJlc2g7XG5cdCAgICB2bS5zZWFyY2ggPSBzZWFyY2g7XG5cdCAgICB2bS5zZXNzaW9ucyA9IFtdO1xuXHQgICAgdm0udGl0bGUgPSAnU2FtcGxlJztcblxuXHQgICAgLy8vLy8vLy8vLy8vXG5cblx0ICAgIGZ1bmN0aW9uIGdvdG9TZXNzaW9uKCkge1xuXHQgICAgICAvKiAqL1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiByZWZyZXNoKCkge1xuXHQgICAgICAvKiAqL1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBzZWFyY2goKSB7XG5cdCAgICAgIC8qICovXG5cdCAgICB9XG5cdH1cblxuXG4vL2VuZCBJSUZFXG59KSgpO1xuXG5cbiIsIihmdW5jdGlvbigpe1xuYW5ndWxhclxuICAgIC5tb2R1bGUoJ3NhbXBsZScpXG4gICAgLmRpcmVjdGl2ZSgnc2FtcGxlRGlyJywgc2FtcGxlRGlyKTtcblxuZnVuY3Rpb24gc2FtcGxlRGlyKCkge1xuXHRyZXR1cm57XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHR0ZW1wbGF0ZVVybDogJycsXG5cdFx0cmVwbGFjZTogdHJ1ZVxuXHRcdC8vIHNjb3BlOiB7fVxuXHR9XG59XG5cbi8vZW5kIElJRkVcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG5cdCd1c2Ugc3RyaWN0J1xuXG5cdGFuZ3VsYXJcbiAgICBcdC5tb2R1bGUoJ3NhbXBsZScpXG4gICAgXHQuZmFjdG9yeSgnc2FtcGxlU2VydmljZScsIHNhbXBsZVNlcnZpY2UpO1xuXG4gICAgc2FtcGxlU2VydmljZS4kaW5qZWN0ID0gW11cblxuICAgIGZ1bmN0aW9uIHNhbXBsZVNlcnZpY2UoKSB7XG4gICAgXHR2YXIgc2VydmljZSA9IHtcblxuICAgIFx0XHRlcnJvcjogZXJyb3IsXG4gICAgXHRcdGluZm86IGluZm8sXG4gICAgXHRcdHN1Y2Nlc3M6IHN1Y2Nlc3NcblxuICAgIFx0fTtcblxuICAgIFx0cmV0dXJuIHNlcnZpY2U7XG5cbiAgICBcdC8vLy8vLy8vLy8vL1xuXG4gICAgXHRmdW5jdGlvbiBlcnJvcigpIHtcblx0ICAgICAgLyogKi9cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gaW5mbygpIHtcblx0ICAgICAgLyogKi9cbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNhbXBsZVNlcnZpY2VcIik7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG5cdCAgICAgIC8qICovXG5cdCAgICB9XG5cblxuICAgIH1cblxuXHRcbi8vIGVuZCBJSUZFXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4ndXNlIHN0cmljdCdcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywnZG9jcyddKVxuXG5cbi5jb25maWcoWyckbG9nUHJvdmlkZXInLCBmdW5jdGlvbigkbG9nUHJvdmlkZXIpe1xuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xufV0pXG5cblxuXG5cblxuLy9lbmQgSUlGRVx0XG59KSgpOyIsIihmdW5jdGlvbigpe1xuJ3VzZSBzdHJpY3QnXG5cbmFuZ3VsYXJcblx0Lm1vZHVsZSgnYXBwJylcblx0LmNvbnRyb2xsZXIoJ2FwcEN0cmwnLCBhcHBDdHJsKVxuXG5hcHBDdHJsLiRpbmplY3QgPSBbJyRsb2cnXTtcblxuZnVuY3Rpb24gYXBwQ3RybCgkbG9nKSB7XG5cblx0JGxvZy5kZWJ1ZyhcImFwcEN0cmwgaW5qZWN0ZWQhXCIpXG59XG5cdFxuXG5cblxuXG4vL2VuZCBJSUZFXG59KSgpOyIsIihmdW5jdGlvbigpe1xuXG5cbmFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuXHQuY29uZmlnKFsnJHVybFJvdXRlclByb3ZpZGVyJywnJHN0YXRlUHJvdmlkZXInLCckaHR0cFByb3ZpZGVyJyxmdW5jdGlvbigkdXJsUm91dGVyUHJvdmlkZXIsICRzdGF0ZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKXtcblx0XHRcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCdkb2NzJyk7XG5cdFx0Ly9zdGF0ZXNcblx0XHQkc3RhdGVQcm92aWRlclxuXG5cdFx0Ly8gLmRlY29yYXRvcigncGF0aCcsIGZ1bmN0aW9uKHN0YXRlLCBwYXJlbnRGbikge1xuXHRcdC8vIFx0Ly9jb25zb2xlLmxvZyhcImNvbmZpZ3VyaW5nIHN0YXRlc1wiKVx0XG5cdFx0Ly8gXHRpZiAoc3RhdGUuc2VsZi5yZXNvbHZlID09PSB1bmRlZmluZWQpIHtcblx0XHQvLyBcdFx0c3RhdGUuc2VsZi5yZXNvbHZlID0ge307XG5cdFx0Ly8gXHRcdHN0YXRlLnJlc29sdmUgPSBzdGF0ZS5zZWxmLnJlc29sdmU7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHRyZXR1cm4gcGFyZW50Rm4oc3RhdGUpO1xuICAvLyAgICAgICAgfSlcblxuXHRcdC5zdGF0ZSgnYXBwJyx7XG5cdFx0XHRhYnN0cmFjdDogdHJ1ZSxcblx0XHRcdHRlbXBsYXRlVXJsOidhcHAvdmlld3MvYXBwLnZpZXcuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnYXBwQ3RybCcsXG5cdFx0XHRjb250cm9sbGVyQXM6ICdhcHAnXG5cblx0XHR9KVxuXG5cdFx0Ly8gLnN0YXRlKCdhcHAuaG9tZScse1xuXHRcdC8vIFx0dXJsOiAnL2hvbWUnLFxuXHRcdC8vIFx0dGVtcGxhdGU6ICc8aDE+IGhvbWUgdmlldyA8L2gxPicsXG5cdFx0Ly8gXHR0ZW1wbGF0ZVVybDonY29tcG9uZW50cy9ob21lL3ZpZXdzL2FwcC5ob21lLmh0bWwnLFxuXHRcdC8vIFx0Ly8gY29udHJvbGxlcjogJ2hvbWVDdHJsJyxcblx0XHQvLyBcdC8vIGNvbnRyb2xsZXJBczogJ2hvbWUnLFxuXHRcdC8vIFx0ZGF0YToge1xuXHRcdC8vIFx0XHRwZXJtaXNzaW9uOiBmYWxzZSxcblx0XHQvLyBcdFx0cGVybWlzc2lvbkxldmVsOiBbJ2V2ZXJ5b25lJ11cblx0XHQvLyBcdH1cblx0XHQvLyB9KVxuXG5cdFx0LnN0YXRlKCdhcHAuZG9jcycse1xuXHRcdFx0dXJsOiAnL2RvY3MnLFxuXHRcdFx0dGVtcGxhdGVVcmw6J2NvbXBvbmVudHMvZG9jcy92aWV3cy9kb2NzLnZpZXcuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnZG9jc0N0cmwnLFxuXHRcdFx0Y29udHJvbGxlckFzOiAnZG9jcycsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdHBlcm1pc3Npb246IGZhbHNlLFxuXHRcdFx0XHRwZXJtaXNzaW9uTGV2ZWw6IFsnZXZlcnlvbmUnXVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHQvLyAuc3RhdGUoJ2FwcC5yZWdpc3Rlcicse1xuXHRcdC8vIFx0dXJsOiAnL3JlZ2lzdGVyJyxcblx0XHQvLyBcdHRlbXBsYXRlVXJsOidjb21wb25lbnRzL3JlZ2lzdGVyL3ZpZXdzL3JlZ2lzdGVyLnZpZXcuaHRtbCcsXG5cdFx0Ly8gXHRjb250cm9sbGVyOiAncmVnaXN0ZXJDdHJsJyxcblx0XHQvLyBcdGNvbnRyb2xsZXJBczogJ3JlZ2lzdGVyJyxcblx0XHQvLyBcdGRhdGE6IHtcblx0XHQvLyBcdFx0cGVybWlzc2lvbjogZmFsc2UsXG5cdFx0Ly8gXHRcdHBlcm1pc3Npb25MZXZlbDogWydldmVyeW9uZSddXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfSlcblxuXHRcdC8vIC5zdGF0ZSgnYXBwLm1lbWJlcnMnLHtcblx0XHQvLyBcdHVybDogJy9tZW1iZXJzJyxcblx0XHQvLyBcdHRlbXBsYXRlVXJsOidjb21wb25lbnRzL21lbWJlcnMvdmlld3MvbWVtYmVycy5ob21lLmh0bWwnLFxuXHRcdC8vIFx0Y29udHJvbGxlcjogJ21lbWJlcnNDdHJsJyxcblx0XHQvLyBcdGNvbnRyb2xsZXJBczogJ21lbWJlcnMnLFxuXHRcdC8vIFx0ZGF0YToge1xuXHRcdC8vIFx0XHRwZXJtaXNzaW9uOiB0cnVlLFxuXHRcdC8vIFx0XHRwZXJtaXNzaW9uTGV2ZWw6IFsnYWRtaW4nLCdtZW1iZXInXVxuXHRcdC8vIFx0fVxuXHRcdC8vIH0pXG5cblxuXHRcdC8vJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XG5cblxuXG5cdH1dKTtcblxuXG5cblxuLy9lbmQgSUlGRVx0XG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
