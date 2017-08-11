$(document).ready(function () {
	$('.materialboxed').materialbox();
});

function scrolldown() {
	$('html,body').animate({
			scrollTop: $("#content").offset().top - 60
		},
		'slow');
}
