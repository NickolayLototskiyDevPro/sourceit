// $('#CentralDiv').click(function (event) {
// 	$('#CentralDiv').load('HTxyUcwXfw.jpg' );
// });


$.getJSON ('http://google.com', '', function(json) {
	$("#CentralDiv").html(json);
	$('#example').html(json);
}
);

$.get ('http://google.com', '', function(json) {
	$("#CentralDiv").html(json);
	// $('#example').html(json);
},
'html'
);


$.ajax( {url: 'http://google.com', 
	type: 'GET',
	cache: 'true'}).done(function (data) {
		$('#example').html(data);
	});