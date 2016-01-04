let GraphicsController = function($scope, $state) {
  
  let vm = this;

  vm.goHome = goHome;

  function goHome () {
    $state.go('root.home');
    location.reload();
  }

};

GraphicsController.$inject = ['$scope', '$state'];

export default GraphicsController;