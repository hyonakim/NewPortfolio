let ProjectsController = function($scope, $state) {
  
  let vm = this;

  vm.goHome = goHome;

  function goHome () {
    $state.go('root.home');
    location.reload();
  }

};

ProjectsController.$inject = ['$scope', '$state'];

export default ProjectsController;