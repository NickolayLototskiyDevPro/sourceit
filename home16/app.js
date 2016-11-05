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

	//alert(Exp.Start)

	if (Exp.Start){
		idbutton.innerHTML='Start';

		//alert('khjjk')
		Exp.onFinishGame();

		//Exp.onStatus(false);
		//Exp.Model.destruct();

		//Exp.Model.showStorage()
		//mainId.style.display='none';

		//console.dir(Exp.Model)

	} else {
		idbutton.innerHTML='Finish';

		//Exp.onStatus(true);
		
		//Exp.Model.init();
		Exp.onStartGame();
		//console.dir(Exp.Model);

	//	mainId.style.display='block';
	//	Exp.Model.showStorage();

	}
}
