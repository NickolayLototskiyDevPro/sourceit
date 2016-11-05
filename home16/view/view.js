class View{

	static clearView(){
		let allId=document.getElementsByClassName('inner');
		
		for (var i = 0; i < allId.length; i++) {
			allId[i].style.background='red';
			allId[i].style.visibility='visible';
		}
	}

	static clearAllView(){
		let allId=document.getElementsByClassName('inner');
		
		for (var i = 0; i < allId.length; i++) {
			allId[i].style.background='white';
			allId[i].style.visibility='hidden';
		}
	}

	static hiddenView(id){
		let el=document.getElementById('id'+id);
		
		el.innerHTML='0';
		el.style.visibility='hidden';
		el.style.background='white';
	}

	static visibleView(id, numb){
		let el=document.getElementById('id'+id);
		
			el.innerHTML=numb;
	}
}