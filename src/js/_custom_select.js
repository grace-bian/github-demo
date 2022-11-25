(function($){
	var ttSelect = $('.tt-select');
	if (ttSelect.length) {
		ttSelect.each( function() {
			$(this).SumoSelect();
		});
	};
})(jQuery);
