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