$(document).ready(function() {
  $('.zoomImage').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

  jQuery(function($){
     $("#date").mask("99/99/9999");
     $("#phone").mask("+7(999) 999-9999");
     $("#tin").mask("99-9999999");
     $("#ssn").mask("999-99-9999");
  });

    new WOW().init();
});
