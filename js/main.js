import angular from 'angular';

// Import jQuery & Foundaiton
import $ from 'jquery';
import 'foundation';
import 'motion-ui';


// Start it up
$(document).foundation();

// Import Sub Modules
import './app-core/index';

// Controllers
import HomeController from './app-layout/home.controller';

// Set up a run block on an angular module to help with
// loading foundation after templates load
angular
  .module('app', ['app.core'])
  .run( function ($rootScope) {
    $rootScope.$on('$viewContentLoaded', function (event, data) {
      $(document).foundation();
    });
  })
  .controller('HomeController', HomeController)
;