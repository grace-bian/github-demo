(function($){
	var methods = {
		init: function(options){
			return this.each(function(){
				$('body').on('click touchstart', '[data-ajaxmodal]', function(e){
					var srcModal = $(this).attr('data-target'),
						srcModalContent = $(srcModal).attr('data-include');

					$.ajax({
						url: srcModalContent,
						success: function(data) {
							var $item = $(data);
							var ajaxInclude = (function(){
								$(srcModal).append($item).addClass('show').css('display', 'block');
							}());
						}
					});
				});
			});
		}
	};
	$.fn.includeAjax = function(action){
		if(methods[action]){
				 return methods[action].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if(typeof action === 'object' || !action){
				 return methods.init.apply(this, arguments);
		} else {
				 console.info('Action ' +action+ 'not found this plugin');
				 return this;
		}
	};
	$('[data-ajaxmodal]').includeAjax();
})(jQuery);