(function($){
	var objMainSlider = $('#js-mainSlider');
	function initTilt(){
		if(window.innerWidth > 1024){
			objMainSlider.find('.js-rotation').tilt({
				perspective: 2000
			});
		}
	};
	if (objMainSlider.length){
		initTilt();
		$(window).resize(debouncer(function(e){
			initTilt();
		}));
	};
})(jQuery);

