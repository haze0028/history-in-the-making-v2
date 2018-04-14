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



})();
