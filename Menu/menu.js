function mainmenu(){
$(" #nav ul ").css({display: "none"}); 
$(" #nav li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
		},function(){
		
}

 
 
 $(document).ready(function(){					
	mainmenu();
});