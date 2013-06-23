$(document).ready(function() {
var $bgImage = $('.post').css('background'),
	$bgImage.load(function() {
		$(this).fadeIn('500');
	});
});