'use strict';

var clickQuest = angular.module('clickQuestApp', ['ngResource','ngRoute']);

clickQuest.config( function($routeProvider) {
  $routeProvider.
	when('/game', 
		{templateUrl: 'views/game.html', controller: 'GameController'}).
	when('/login', 
		{templateUrl: 'views/login.html', controller: 'LoginController'}).
	when('/register', 
		{templateUrl: 'views/register.html', controller: 'RegisterController'}).
	otherwise({redirectTo: '/login'});
});