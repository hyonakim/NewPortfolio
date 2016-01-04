
let HomeController = function($anchorScroll, $location) {

  let vm = this;
  let $win = $(window);

  vm.scrollUp = scrollUp;
  vm.home = home;
  vm.about = about;
  vm.portfolio = portfolio;
  vm.contact = contact;



  $win.scroll(function(event) {
    var y = $(this).scrollTop();
    if(y >= 190) {
      $('#hkLogo').removeClass('.hkLogo').addClass('animateHk');
    }
    if(y >= 400) {
      $('#aboutMe').removeClass('.aboutMe').addClass('animateAbout');
    }
    if(y >= 1770) {
      $('#projects').removeClass('.projects').addClass('animateProjects');
      $('#graphics').removeClass('.graphics').addClass('animateGraphics');
    }
  });
 
  function home() {
    $location.hash('home');
    $anchorScroll();
  }

  function about() {
    $location.hash('about');
    $anchorScroll();
    $anchorScroll.yOffset = 175;
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