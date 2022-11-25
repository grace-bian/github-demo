(function($){
	var header = $('#tt-header'),
		$window = $(window);
	if(header.length){
		stuck();
		initStuck();
	};
	function stuck(){
		$window.scroll(function(){
			initStuck();
		});
	};
	function initStuck(){
		if($window.scrollTop() > 0){
			header.addClass('stuck');
		} else {
			header.removeClass('stuck');
		}
	};
})(jQuery);
