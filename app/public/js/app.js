/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function () {
	'use strict';

	app.todos.url = 'api/'
	// kick things off by creating the `App`
	new app.AppView();
});
