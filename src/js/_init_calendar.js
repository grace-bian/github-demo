(function($){
	$.fn.datepicker.language['en'] = {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
		monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		today: 'Today',
		clear: 'Clear',
		dateFormat: 'mm/dd/yyyy',
		timeFormat: 'hh:ii aa',
		firstDay: 0
	};

	var startDate = new Date(2020, 22, 01);
	var dp = $('.j_datepicker-1').datepicker({
		startDate: startDate,
		language: 'en',
	}).data('datepicker');

	dp.selectDate(startDate);



	var ttcalendar = $('#js-ttcalendar');
	if (ttcalendar.length && ttcalendar.hasClass('ttcalendar-layout01')){
		if(window.innerWidth <= 1024 && !!('ontouchstart' in window) || !!('onmsgesturechange' in window)){
			initOneClickBtn();
		};
	};
	if (ttcalendar.length && ttcalendar.hasClass('ttcalendar-layout02')){
		if(window.innerWidth <= 1024 && !!('ontouchstart' in window) || !!('onmsgesturechange' in window)){
			initOneClickBtn02();
		};
	};
	function initOneClickBtn(){
		$('body').on('touchstart click', '#js-ttcalendar .tt-day-grid > *', function(e){
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			watchClosingModal();
		});
		$('body').on('touchstart touchend', '#js-ttcalendar .tt-day-event__bg > *', function(e){
			$(this).focus();
		});
	};
	function initOneClickBtn02(){
		console.log("initOneClickBtn02");
		$('body').on('click', '#js-ttcalendar .tickets-col', function(e){
			$('#js-ttcalendar').find('.tickets-col').removeClass('active');
			$(this).addClass('active');
		});
	};
	function watchClosingModal(){
		$('body').on('click', '.modal .close', function(e){
			$('#js-ttcalendar .tt-day-grid > .active').removeClass('active');
		});
	};
})(jQuery);



