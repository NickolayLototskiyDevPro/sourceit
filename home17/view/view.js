class ViewTableReg{

	static addNewRow(newRecord){
		let divId=$("<div>", {
			    	  id: newRecord.id
					});

		let reg=/\d+/;
		let strId=newRecord.id;
		let parseId=strId.match(reg);

		$("<input>", {
    			type:'text',
    			name: 'outId',
    			value: parseId,
    			class: 'rowId',
    			disabled: 'disabled'
  			}).appendTo(divId);

		$("<input>", {
    			type:'text',
    			name: 'outExp',
    			value: newRecord.txtReg,
    			class: 'rowTxt',
    			disabled: 'disabled'
  			}).appendTo(divId);

		$("<input>", {
    			type:'text',
    			name: 'outTxt',
    			value: newRecord.valReg,
    			class: 'rowTxt',
    			disabled: 'disabled'
  			}).appendTo(divId);

		divId.appendTo('#outDiv');

	}

	static viewRow(idRecord, color){
		$('#outDiv '+'#'+idRecord+' *').css('background-color', color);
	}

	static clearView(){
		$('#outDiv *').remove();
	}


	static modeTable(mode){
		$('.tableReg').css('display',mode);
	}

}