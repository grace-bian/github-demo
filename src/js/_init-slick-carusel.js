(function($){
	$('#tt-pageContent [data-slick]').slick({
		dots: true,
		arrows: false
	});
})(jQuery);
(function($){
	var slick01 = $('#tt-pageContent .js-slick01');
	if (slick01.length) {
		slick01.slick({
			lazyLoad: 'progressive',
			dots: true,
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 5,
			slidesToScroll: 2,
			adaptiveHeight: true,
			autoplay:true,
			autoplaySpeed:2500,
			responsive: [
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 791,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}

			]
		});
	};
})(jQuery);
(function($){
	function initSliderCarusel(){
		if ($(window).width() < 791){
			var slick02 = $('#tt-pageContent .js-slick02');
			if (slick02.length) {
				slick02.slick({
					lazyLoad: 'progressive',
					dots: true,
					arrows: false,
					infinite: true,
					speed: 300,
					slidesToShow: 2,
					slidesToScroll: 2,
					adaptiveHeight: true,
					autoplay:true,
					autoplaySpeed:2000,
					responsive: [
						{
							breakpoint: 576,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
					]
				});
			};
		}
	};
	initSliderCarusel();
	$(window).resize(debouncer(function(e){
		initSliderCarusel();
	}));
})(jQuery);
(function($){
	var slick01 = $('#tt-pageContent .js-slick03');
	if (slick01.length) {
		slick01.slick({
			lazyLoad: 'progressive',
			dots: true,
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,
			adaptiveHeight: true,
			autoplay:true,
			autoplaySpeed:3000,
			responsive: [
			{
				breakpoint: 791,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}

			]
		});
	};
})(jQuery);
(function($){
	var ticketsCol = $('#tt-pageContent .js-init-slick04');
	if (ticketsCol.length) {
		ticketsCol.slick({
			dots: true,
			arrows: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			nextArrow: '.parallax__navleft',
			prevArrow: '.parallax__navright',
			autoplay:true,
			autoplaySpeed:5500
		});
	};
})(jQuery);
(function($){
	var ticketsCol = $('#js-ttcalendar');
	if (ticketsCol.length) {
		ticketsCol.slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			nextArrow: '.ttcalendar__navleft',
			prevArrow: '.ttcalendar__navright'
		});
	};
})(jQuery);
