
let HomeController = function($anchorScroll, $location) {

  let vm = this;

  vm.scrollUp = scrollUp;
  vm.home = home;
  vm.about = about;
  vm.portfolio = portfolio;
  vm.contact = contact;

  function home() {
    $location.hash('home');
    $anchorScroll();
  }

  function about() {
    $location.hash('about');
    $anchorScroll();
    $anchorScroll.yOffset = 54;
  }

  function portfolio() {
    $location.hash('portfolio');
    $anchorScroll();
    $anchorScroll.yOffset = -11;
  }

  function contact() {
    $location.hash('contact');
    $anchorScroll();
    $anchorScroll.yOffset = 50;
  }

  /**** Scroll to Top from Bottom ****/
  function scrollUp() {
    $location.hash('top');
    $anchorScroll();
  }
};

HomeController.$inject = ['$anchorScroll', '$location'];

export default HomeController;