class RecordRegs {

	constructor (id, txtReg, valReg){
		this.id=id;
		this.txtReg=txtReg;
		this.valReg=valReg;
	}

	getValue(){
		let currentVal={id:this.id, txtReg:this.txtReg, valReg:this.valReg};
		return currentVal;
	}

}

class UpRecordRegs extends RecordRegs {

	constructor(id, txtReg, valReg){
		super(id, txtReg, valReg);
	}

	testRecord(){
		let txtReg=this.getValue().txtReg;
		let valReg=this.getValue().valReg;
		let re = new RegExp(txtReg);
		
		return re.test(valReg);
	}
}

class StorageRegs {
	constructor (){
		this.storage=[];
	}

	addNewRecord(txtReg, valReg){

		let newId=this.storage.length+1;
		let localRecord=new UpRecordRegs('id'+newId, txtReg, valReg);

		this.storage.push(localRecord);

		return localRecord.getValue();
	}

	allRecord(callBack){
		for (let i = 0; i <= this.storage.length-1; i++) {
			callBack(this.storage[i]);
		}
	}

	deleteAllRecord(){
		for (var i = this.storage.length; i >= 0; i--) {
			this.storage.pop();
		}
	}

	emptyModel(){
		if (this.storage.length > 1) {
			return true;
		} else {
			return false;
		}
	}
}