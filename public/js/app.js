const app = angular.module('stationf', ['ngRoute'])

app.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
	$locationProvider.html5Mode({enabled:true});
	$routeProvider.when('/groups', {
		templateUrl: 'groups.html',
		controller: 'groupsController',
		controllerAs: 'ctrl'
	})

	$routeProvider.when('/raids', {
		templateUrl: 'raids.html',
		controller: 'raidsController',
		controllerAs: 'ctrl'
	})

	$routeProvider.when('/profile', {
		templateUrl: 'profile.html',
		controller: 'profileController',
		controllerAs: 'ctrl'
	})

	$routeProvider.when('/groups/:id', {
		templateUrl: 'group.html',
		controller: 'groupController',
		controllerAs: 'ctrl'
	})

	$routeProvider.when('/', {
		templateUrl: 'index.html'
	})
}])

app.controller('mainController', ['$http','$routeParams', function ($http, $routeParams) {


	$http({
		method: 'GET',
		url: '/rooms'
	}).then((response) => {
		this.rooms = response.data
		console.log(response.data);
	});

}]);

app.controller('groupsController', ['$http','$location','$routeParams', function ($http, $location ,$routeParams) {
	

}]);

app.controller('groupController', ['$http','$routeParams', function ($http, $routeParams) {


}]);

app.controller('raidsController', ['$http','$routeParams', function ($http, $routeParams) {


}]);

app.controller('profileController', ['$http','$routeParams', function ($http, $routeParams) {


}]);