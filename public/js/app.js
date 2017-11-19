const app = angular.module('stationf', ['ngRoute'])


app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
	$locationProvider.html5Mode({enabled:true});

	$routeProvider.when('/rooms/:id', {
		templateUrl: 'room.html',
		controller: 'roomController',
		controllerAs: 'ctrl'
	})

	$routeProvider.when('/', {
		templateUrl: 'home.html',
		controller: 'mainController'
	})
}])

app.controller('mainController', ['$http','$routeParams', function ($http, $routeParams) {


	this.equipments = ['TV', 'Retro Projecteur']


	this.getRooms = () => {
		$http({
			method: 'GET',
			url: '/roomsapi'
		}).then((response) => {
			this.rooms = response.data;
			//console.log(response.data);
		});
	}

	this.getRooms()

	this.capacityFilter = (room) => {
		return !(room.capacity < this.min);
	}

	this.equipsFilter = (room) => {
		if(this.TVFilter && this.RPFilter) {
			return (room.equips.indexOf('TV') != -1 && room.equips.indexOf('Retro Projecteur') != -1)
		}
		else if (this.TVFilter) {
			return (room.equips.indexOf('TV') != -1)
		}
		else if (this.RPFilter) {
			return (room.equips.indexOf('Retro Projecteur') != -1)
		}
		else {
			return true
		}
	}

	$('#filter-show').on('click', () => {
		//console.log('sdsda')
		$('#sidebar').show()
		$('#rooms').hide()
	})

	$('#filter-hide').on('click', () => {
		//console.log('sdsda')
		$('#sidebar').hide()
		$('#rooms').show()
	})


}]);

app.controller('roomController', ['$http','$location','$routeParams', function ($http, $location ,$routeParams) {
	
	this.getOneRoom = () => {
		$http({
			method: 'GET',
			url: '/roomsapi/' + String($routeParams.id)
		}).then((response) => {
			this.room = response.data;
			//console.log(response.data);
		});
	}
	this.getOneRoom();

	this.possibleTimes = []

	for (i=9;i<16;i++) {
		this.possibleTimes.push(String(i) + ":00")
		this.possibleTimes.push(String(i) + ":30")
	}

	this.reservation = {};

	this.reserve = () => {
		//console.log(this.reservation)
		this.reservationConfirmed = this.reservation
		this.reservation = {}

		$('#confirmation').show('slow')
	}

	$('#reserve-button').on('click', () => {
		//console.log('clcik')
		$('.right-col').show()
	})

}]);

