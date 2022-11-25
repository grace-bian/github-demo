(function($){
	var filterNav = $('#filter-nav'),
		filterLayout = $('#filter-layout'),
		navLine = $('#tt-filternav__line');

	if(!filterNav.length && !filterLayout.length) return false;

	var initFilter = (function(){
		var valueFilter = filterNav.find('.active a').attr('href');
		filterLayout.find('.' + valueFilter).addClass('show');
	}());

	$('body').on('click touchstart', '#filter-nav .gallery-navitem', function(e){
		e.preventDefault();
		if($(this).closest('li').hasClass('active')){
			return false
		} else {
			$(this).closest('li').addClass('active').siblings().removeClass('active');
			var valueFilter = filterNav.find('.active a').attr('href');
			filterLayout.find('.show').removeClass('show');
			filterLayout.find('.' + valueFilter).addClass('show');
		};
	});
	$(window).resize(debouncer(function(e){
		changePosition(filterNav.find('.active'));
	}));

	var setValue = (function(){
		changePosition(filterNav.find('.active'));
	}());
	var hoverLi = (function(){
		filterNav.find('> ul > li').on("mouseenter", function(){
			changePosition($(this));
		}).on('mouseleave', function() {
			changePosition(filterNav.find('> ul > li.active'));
		});
	}());
	function changePosition(obj){
		var $this = obj.find('span');
		navLine.css({
			'top': parseInt($this.position().top + $this.height(), 10),
			'left': parseInt($this.position().left, 10),
			'width': parseInt($this.width(), 10),
			'opacity': 1
		});
	};

	var moreWrapper = $('#js-more-include');
	if(!moreWrapper.length) return false;
	var includeValue = moreWrapper.attr('data-include');

	$('body').on('click touchstart', '#js-more-include > *', function(e){
		e.preventDefault();
		$.ajax({
			url: 'ajax-content/more-gallery-innerlayout.php',
			success: function(data) {
				var $item = $(data);
				var ajaxInclude = (function(){
					moreWrapper.parent().append($item);
					moreWrapper.remove();
				}());
			}
		});
	});

})(jQuery);
/*
  Debouncer
*/
 function debouncer(func, timeout) {
	var timeoutID, timeout = timeout || 500;
	return function() {
		var scope = this,
			args = arguments;
		clearTimeout(timeoutID);
		timeoutID = setTimeout(function() {
			func.apply(scope, Array.prototype.slice.call(args));
		}, timeout);
	}
};