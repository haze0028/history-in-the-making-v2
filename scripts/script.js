(function () {
	console.log("Page loaded");
	var wrapper, toggle, nav;
	
	// trigger nav menu dropdown effects
	$('nav li').hover(function () {
		$(this).find('ul').slideToggle('fast');
	})

	//side menu slide in effect
	wrapper = $(".wrap");
	toggle = $(".toggle");
	nav = $(".side-nav");
	
	toggle.on("click", function () {
		wrapper.toggleClass("nav-open");
		// Change the font-awesome icons on click.
		toggle.toggleClass("fa-bars");
		toggle.toggleClass("fa-times");
	});

	$(window).on("click", function (e) {
		if (wrapper.hasClass("nav-open") &&
			!$(e.target).hasClass("toggle")) {
			wrapper.removeClass("nav-open");
			toggle.toggleClass("fa-bars");
			toggle.toggleClass("fa-times");
		}
	});

})();
