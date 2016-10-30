$.ajax({
	url: 'http://google.com/aaa',
	success: function (data) {
	$('#res').html(data);
	},
	error: function (request, status, error) {
	if(request.status){
    alert("Error code: " + request.status)
	} else {alert("Error")};
    }
});