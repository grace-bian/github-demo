(function($){
	(function ptInitCountdown(){
		$('#modalBayTickets').find('.pt-countdown').each(function(){
			var $this = $(this),
					showZero = showZero || false,
					date = $this.data('date'),
					set_year = $this.data('year') || 'Yrs',
					set_month = $this.data('month') || 'Mths',
					set_week = $this.data('week') || 'Wk',
					set_day = $this.data('Days') || 'Days',
					set_hour = $this.data('Hours') || 'Hours',
					set_minute = $this.data('Min') || 'Min',
					set_second = $this.data('second') || 'Sec';


			var define_title = $this.prev('.pt-countdow-title'),
					define_title_value = define_title.data('title') || 'Offer Will End Through';

			if(define_title.length){
					define_title.html(define_title_value);
			};


			if (date = date.split('-')){
				date = date.join('/');
			} else return;

			$this.countdown(date , function(e) {
				var format = '<span class="countdown-row">';

				function addFormat(func, timeNum, showZero) {
					if(timeNum === 0 && !showZero) return;

					func(format);
				};

				addFormat(function() {
					format += '<span class="countdown-section">'
									+ '<span class="countdown-amount">' + e.offset.totalDays + '</span>'
									+ '<span class="countdown-period">' + set_day + '</span>'
								+ '</span>';
				}, e.offset.totalDays, showZero);

				addFormat(function() {
					format += '<span class="countdown-section">'
									+ '<span class="countdown-amount">' + e.offset.hours + '</span>'
									+ '<span class="countdown-period">' + set_hour + '</span>'
								+ '</span>';
				}, e.offset.hours, showZero);

				addFormat(function() {
					format += '<span class="countdown-section">'
									+ '<span class="countdown-amount">' + e.offset.minutes + '</span>'
									+ '<span class="countdown-period">' + set_minute + '</span>'
								+ '</span>';
				}, e.offset.minutes, showZero);


				format += '</span>';

					$(this).html(format);
			});
		});
	}());
})(jQuery);
