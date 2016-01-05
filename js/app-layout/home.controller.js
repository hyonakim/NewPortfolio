
let HomeController = function($anchorScroll, $location) {

  let vm = this;
  let $win = $(window);

  vm.scrollUp = scrollUp;
  vm.getInTouch = getInTouch;
  vm.home = home;
  vm.about = about;
  vm.portfolio = portfolio;
  vm.contact = contact;



  $win.scroll(function(event) {
    var y = $(this).scrollTop();

    if(y >= 800) {
      $('#stickyNav').removeClass('.stickyNav').addClass('dropSticky');
    } else if(y <= 80) {
      $('#stickyNav').removeClass('dropSticky').addClass('.stickyNav');
    }
    if(y >= 190) {
      $('#hkLogo').removeClass('.hkLogo').addClass('animateHk');
    }
    if(y >= 400) {
      $('#aboutMe').removeClass('.aboutMe').addClass('animateAbout');
    }
    if(y >= 900) {
      $('#mySkills').removeClass('.skillHeader').addClass('animateSkills');
    }
    if(y >= 1760) {
      $('#projects').removeClass('.projects').addClass('animateProjects');
      $('#graphics').removeClass('.graphics').addClass('animateGraphics');
    }
    if(y >= 2000) {
      $('#hkLogoBtm').removeClass('.hkLogoBtm').addClass('animateLogoBtm');
    }
  });
 
  function home() {
    $location.hash('home');
    $anchorScroll();
  }

  function getInTouch() {
    $location.hash('getInTouch');
    $anchorScroll();
    $anchorScroll.yOffset = 600;
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