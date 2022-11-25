(function($){
	var searchWrapper =  $('#js-search');

	if (searchWrapper.length){
		var searchInput = $('#js-search-input'),
			searchResults = $('#js-search-results');

		initSearchPopup();
		initShowAjaxRequest();
	};
	function initSearchPopup(){
		var searchBtn = searchWrapper.find('.tt-obj__btn'),
			searchDropdown = searchWrapper.find('.tt-dropdown-menu');

		$('body').on('click', '#js-search', function(e){
			var target = e.target;

			if ($('.tt-obj__btn').is(target)){
				$('#js-search').toggleClass('active');
				return false;
			};
			if ($('.tt-btn-close').is(target)){
				objSearchClose();
			};
			if ($('.tt-btn-close').is(target)){
				objSearchClose();
			};

			$(document).mouseup(function(e){
				if (!$(this).is(e.target) && $('#js-search').has(e.target).length === 0){
					objSearchClose();
				};
			});

		});
		$('body').on('click', '#js-search-results li a', function(e){
			objSearchClose();
		});

		function objSearchClose(){
			$('#js-search').removeClass('active');
			searchResults.blur();
			return false;
		};

	};
	function initShowAjaxRequest(){
		searchInput.on("input",function(ev){
			if($(ev.target).val()){
				searchResults.fadeIn("250");
				var searchInclude = $('#js-search-results');
				if(!searchInclude.hasClass('tt-is-include')){
					searchInclude.addClass('tt-is-include');
					$.ajax({
						url: 'ajax-content/search-results.html',
						success: function(data){
							var $item = $(data);
							searchInclude.append($item);
						}
					});
				}
			};
		});
		searchInput.blur(function(){
			searchResults.fadeOut("250");
		});
	};
})(jQuery);
