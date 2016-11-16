let App=new MainController();

addReg.onclick=function(){
	let currTxtReg=txtReg.value,
		currValReg=valReg.value;

	App.addNewRecModel(currTxtReg, currValReg);

	txtReg.value='';
	valReg.value='';
}

validReg.onclick=function(){
	App.validateModel();
}

clearReg.onclick=function(){
	App.clearModel();
}

