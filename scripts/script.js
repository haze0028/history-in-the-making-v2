(function () {
	console.log("Page loaded");
	var wrapper, toggle, nav, overlay, body;


	//side menu slide in effect
	toggle = $(".nav-toggle");
	nav = $("#side-nav nav");
	overlay = $('.overlay');
	body = $('body');

	$('.toggle-menu').on('click', function () {
		$(this).toggleClass('flipped');
		$(this).parent().find('ul').slideToggle();
	})

	
	// trigger nav menu dropdown effects
	$('#desktop-nav li').hover(function () {
		$(this).find('ul').slideToggle();
	});
	
	//Open the side-nav
	toggle.on("click", function () {
//		nav.toggleClass("nav-closed");
		overlay.css('display', 'block');
		nav.animate({right: '0px'});
		body.css('overflow', 'hidden');
	});
	
	//Close the side-nav
	$('.toggle-close').on('click', closeOverlay);	
	$('.close-overlay').on('click', closeOverlay);
	
	function closeOverlay(){
		nav.animate({right: '-300px'});
		body.css('overflow', 'visible');
		$(this).removeClass('nav-open');
		overlay.delay('500ms').fadeToggle();
	}
})();
