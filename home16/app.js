let Exp=new ControllerFifteen();


mainId.onclick=function(e){
	let idStr=e.target.id,
		nubId=idStr.split('id')[1];

		if (Exp.Start){
			Exp.onMove(nubId);
		}	

}

idbutton.onclick=function(){
	let mainEl=document.getElementById('mainId');

	if (Exp.Start){
		idbutton.innerHTML='Start';
		Exp.onFinishGame();

	} else {
		idbutton.innerHTML='Finish';
		Exp.onStartGame();
	}
}
