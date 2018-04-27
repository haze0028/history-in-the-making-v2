(function () {
	$('#navbars').load('../includes/navs.html');
	$('#secondary-nav').load('../includes/secondary-nav.html');
	console.log("Page loaded");
	

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
	//Flip images
	////////////
	$('.clothing-items .main-img').on('click', function () {
		$(this).toggleClass('show-img').toggleClass('hide-img');
		$(this).parent().find($('.alt-img')).toggleClass('hide-img').toggleClass('show-img');
	})
	$('.clothing-items .alt-img').on('click', function () {
		$(this).toggleClass('show-img').toggleClass('hide-img');
		$(this).parent().find($('.main-img')).toggleClass('hide-img').toggleClass('show-img');
	})

	/////////////
	//Gallery images
	////////////
	
	function galleryOverlay(){
		var overlay, img, closeBtn, closeBg, overlayImg , src, altText;
		overlay = $('.gallery-overlay');
		img = $('.gallery-item');
		closeBg = $('.close-overlay-bg');
		closeBtn = $('.close-overlay-btn');
		overlayImg = $('.gallery-overlay img');
		
		img.click(function(){
			overlay.fadeIn('fast');
			src = $(this).find('img').attr('src');
			alt= $(this).find('img').attr('alt');
			console.log(src);
			overlayImg.attr('src', src);
			overlayImg.attr('alt', alt);
		})
				
		closeBg.click(closeOverlay);
		closeBtn.click(closeOverlay);
		
		function closeOverlay(){
			overlay.fadeOut();			
		}
	};
	
	galleryOverlay();
	
	
	
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
