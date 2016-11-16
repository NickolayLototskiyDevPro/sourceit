class MainController{

	constructor(){
		this.Model=new StorageRegs();
	}

	addNewRecModel(txtReg, valReg){
		let newRecord=this.Model.addNewRecord(txtReg, valReg);

		ViewTableReg.modeTable('block');
		ViewTableReg.addNewRow(newRecord);

	}

	validateModel(){
		this.Model.allRecord( (value) => {
	
			if (!value.testRecord()) {
				ViewTableReg.viewRow(value.id, 'red')
				}		
		})
	}

	clearModel(){
		this.Model.deleteAllRecord();
		ViewTableReg.clearView();
		ViewTableReg.modeTable('none');
	}


}