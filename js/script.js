// При нажатии на кнопку
$(function(){
	$('.callback-button').click(function(){
		$('#popupContainer').css('display', 'flex');
	});

	$('#popupContainer').click(function(event){
		if (event.target === this) {
			$('#popupContainer').css('display', 'none');
		}
	});

	$('#popupContainer #closing').click(function(event){
		if (event.target === this) {
			$('#popupContainer').css('display', 'none');
		}
	});

});