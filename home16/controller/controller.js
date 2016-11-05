class ControllerFifteen{

	onMove(id){
		let currMap=this.Model.Map.getMap();
		
		for (var key in currMap) {
		
			if (key == id) {
				let el={x:null, y:null};


				el.x=currMap[key].x;
				el.y=currMap[key].y;
				


				this.Model.shiftStorage(el);
				this.Model.showStorage();
				
				
			}
		}


	}

	onStatus(value){
		this.Start=value;
	}


	onStartGame(){
		this.onStatus(true);

		this.Model.init();

		this.Model.showStorage();
	}

	onFinishGame(){
		this.onStatus(false);

		this.Model.destruct();

		View.clearAllView();

	}

	constructor(){
		this.Model=new Fifteen();

		this.Start=false;
		//this.Model.showStorage();
	}
}