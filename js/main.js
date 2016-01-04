import angular from 'angular';

import $ from 'jquery';
import 'foundation';
import 'motion-ui';


// Start it up
$(document).foundation();

// Import Sub Modules
import './app-core/index';

// Controllers
import HomeController from './app-layout/home.controller';
import ProjectsController from './app-layout/projects.controller';
import GraphicsController from './app-layout/graphics.controller';

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
  .controller('ProjectsController', ProjectsController)
  .controller('GraphicsController', GraphicsController)
;