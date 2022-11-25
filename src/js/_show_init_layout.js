(function($){
	var jsShowLayout = $('#js-show-btn');
	if (jsShowLayout){
		$('body').on('click touchstart', '#js-show-btn', function(e){
			$('#js-show-layout').find('.tt-table-hide').removeClass('tt-table-hide');
			jsShowLayout.remove();
			return false;
		});
	};
})(jQuery);
