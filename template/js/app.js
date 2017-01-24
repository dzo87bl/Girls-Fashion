$(document).ready(function() {
	
	/* nav dropdown menu */
	if ($(window).width() > 768) {
		$('#navbar .nav').removeClass('animated bounceInDown');
		$('ul.nav li.dropdown').hover(function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeIn();
			//$(this).find('.dropdown-menu').stop(true, true).slideDown();
			$(this).find('.dropdown-menu').removeClass('animated flipOutY').addClass('animated rubberBand');
			$(this).addClass('open');
		}, function() {
			//$(this).find('.dropdown-menu').stop(true, true).fadeOut();
			//$(this).find('.dropdown-menu').stop(true, true).slideUp();
			//$(this).find('.dropdown-menu').removeClass('animated flipInY').addClass('animated flipOutY');
			$(this).removeClass('open');
		});
	} else {
		$('#navbar .nav').addClass('animated bounceInDown');
	}
	
	/* remove focus from bootstrap btn */
	$('.btn').focus(function(event) {
		event.target.blur();
	});

	/* remove empty p tag */
	$('p').each(function() {
		var $this = $(this);
		if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
			$this.remove();
	});

	/* remove error image */
	$("img").error(function () { 
    	$(this).hide(); 
	});
	
	/* window scroll */
	// $fn.scrollSpeed(step, speed, easing);
	jQuery.scrollSpeed(100, 600);
	
});

/* form verify */
function verify() {
	var error = 0;
	var elm = ['name', 'email'];
	for (var i = 0; i < elm.length; i++) {
		if (document.getElementById(elm[i]).value.trim() == null || document.getElementById(elm[i]).value.trim() == '' || document.getElementById(elm[i]).value.trim() == '0') {
			document.getElementById(elm[i]).style.outline = '1px solid red';
			error = 1;
			if (elm[i] == 'country') {
				$('#' + elm[i] + '').selectpicker('setStyle', 'btn-danger');
			}
		} else {
			document.getElementById(elm[i]).style.outline = 'none';
			if (elm[i] == 'country') {
				error = 0;
				$('#' + elm[i] + '').selectpicker('setStyle', 'btn-danger', 'remove');
				$('#' + elm[i] + '').selectpicker('refresh');
			}
		}
		if (elm[i] == 'email') {
			if (document.getElementById('email').value.trim() != '') {
				var emailReg1 = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/;
				// not valid
				var emailReg2 = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,6}|[0-9]{1,3})(\]?)$/;
				if (!(!emailReg1.test(document.getElementById('email').value) && emailReg2.test(document.getElementById('email').value))) {
					error = 1;
					document.getElementById('email').style.outline = '1px solid red';
				} else {
					error = 0;
					document.getElementById(elm[i]).style.outline = 'none';
				}
			}
		}
	}
	if (error == 0) {
		//alert('OK: ' + error);
		this.form.submit();
		//document.getElementById('{formname}').submit();
	} else {
		//alert('ERROR: ' + error);
		//error=0;
		//alert('All fields are requested!');
		//$('#myModal').show();
		return false;
	}
}