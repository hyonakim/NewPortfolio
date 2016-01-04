let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html',
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      templateUrl: 'templates/app-layout/about.tpl.html'
    })
    .state('root.projects', {
      url: '/projects',
      controller: 'ProjectsController as vm',
      templateUrl: 'templates/app-layout/projects.tpl.html'
    })
    .state('root.graphics', {
      url: '/graphics',
      controller: 'GraphicsController as vm',
      templateUrl: 'templates/app-layout/graphics.tpl.html'
    });


};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;