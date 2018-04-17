(function () {
	console.log("Page loaded");
	var wrapper, toggle, nav, overlay, keys;

	//	//Load the navs into the page
	//	$('#test').load('../includes/navs.html');

	//side menu slide in effect
	toggle = $(".nav-toggle");
	nav = $("#side-nav nav");
	overlay = $('.overlay');

	$('.toggle-menu').on('click', function () {
		$(this).toggleClass('flipped');
		$(this).parent().find('ul').slideToggle();
	})


	// trigger nav menu dropdown effects
	$('#desktop-nav li').hover(function () {
		$(this).find('ul').slideToggle('fast');
	});

	//Open the side-nav
	toggle.on("click", function () {
		disable_scroll();
		overlay.css('display', 'block');
		nav.animate({
			right: '0px'
		});
	});

	//Close the side-nav
	$('.toggle-close').on('click', closeOverlay);
	$('.close-overlay').on('click', closeOverlay);

	function closeOverlay() {
		enable_scroll()
		nav.animate({
			right: '-300px'
		});
		$(this).removeClass('nav-open');
		overlay.delay('500ms').fadeToggle();
	}

	//Disable Scrolling when in Side-nav
	keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];

	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();
		e.returnValue = false;
	}

	function keydown(e) {
		for (var i = keys.length; i--;) {
			if (e.keyCode === keys[i]) {
				preventDefault(e);
				return;
			}
		}
	}

	function wheel(e) {
		preventDefault(e);
	}

	function disable_scroll() {
		if (window.addEventListener) {
			window.addEventListener('DOMMouseScroll', wheel, false);
		}
		window.onmousewheel = document.onmousewheel = wheel;
		document.onkeydown = keydown;
		disable_scroll_mobile();
	}

	function enable_scroll() {
		if (window.removeEventListener) {
			window.removeEventListener('DOMMouseScroll', wheel, false);
		}
		window.onmousewheel = document.onmousewheel = document.onkeydown = null;
		enable_scroll_mobile();
	}

	// My improvement
	// MOBILE
	function disable_scroll_mobile() {
		document.addEventListener('touchmove', preventDefault, false);
	}

	function enable_scroll_mobile() {
		document.removeEventListener('touchmove', preventDefault, false);
	}


	/////////////
	//"To top" Button
	////////////
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.top-btn').addClass('slide-in');
		} else {
			$('.top-btn').removeClass('slide-in');
		}
	});

	$('.top-btn').on('click', function (e) {
		e.preventDefault();
		$(this).trigger('blur');
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});



	/////////////
	//Jquey media queries
	////////////
	
//	$(window).resize(function(){
//		//Below 1200 VW
//	if ($(window).width() <= 1200){	
//		console.log('changing');
//		$('.top-btn').find('i').removeClass('fa-arrow-circle-up').addClass('fas fa-arrow-up');
//	}	else{ //Above 1200
//		$('.top-btn').find('i').removeClass('fas fa-arrow-up').addClass('fa-arrow-circle-up');
//		
//	}
//});
	
//	// run test on initial page load
//	checkSize();
//	var responsiveValue = $('#responsive').css("top");
//	// run test on resize of the window
//	$(window).resize(checkSize);
//
//	//Function to the css rule
//	function checkSize() {
//		console.log((responsiveValue));
//		switch (responsiveValue) {
//			case 5:
//				console.log("lg desktop");
//				break;
//			case 4:
//				console.log("md desktop");
//				break;
//			case 3:
//				console.log("tablet");
//				break;
//			case 2:
//				console.log("lg phone");
//				break;
//			case 1:
//				console.log("sm phone");
//				break;
//			default:
//				console.log("woops");
//				break;
//		}
//	}


})();
