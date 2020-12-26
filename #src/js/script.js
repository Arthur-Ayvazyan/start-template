
@@include('jquery.min.js');

window.onload = function () {
  @@include('slick.js');

  function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {

    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
  //---------------------------------------------------------


  // $('.burger').on('click', function(e){
  //// e.preventDefault;
  // 	$(this).toggleClass('burger_active');
  // 	$('.menu').toggleClass('menu_active');
  // 	$('body').toggleClass('scroll-hidden');
  // });	



  // $('.address-info__button').on('click', function(e){
  // 	$('body').toggleClass('scroll-hidden');
  // 	$('.modal').addClass('modal_active');
  // })
  // 	$('.popup-closer').on('click', function(e){
  // 	$('.modal').removeClass('modal_active');
  // 	$('body').toggleClass('scroll-hidden');
  // })


  // }

  // $(document).ready(function(){

  //   $('.main-slider-content').slick({
  //   	lazyLoad: 'progressive',
  //     arrows: false,
  //   	dots: true,
  //   	fade: true,
  //   	speed: 500,
  //   	centerPadding: '0',
  //   	centerMode: true,
  //   	// autoplay: true,
  //   	// autoplaySpeed: '3',
  //   	// focus: false,
  //   });
  // });





}