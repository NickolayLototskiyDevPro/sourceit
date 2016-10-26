var isGameStart = false;

$(function(){
	function user_info(){
		isGameStart = !isGameStart;
		$('#start').blur();
		if(isGameStart){
			$('.header').css("backgroundColor", "#ef633e");
			$('#start').val("Finish Game");
			$('#status').html('OnLine');
			$('#status').css('color', '#3cd713');

		}else{
			$('.header').css("backgroundColor", "transparent");
			$('#start').val("Start Game");
			$('#status').html('OffLine')
			$('#status').css('color', 'red');
		}
	}
	
	$('#start').on('click', user_info);
});



