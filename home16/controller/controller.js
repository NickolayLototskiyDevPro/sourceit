class ControllerFifteen{

	onMove(id){
		let currMap=this.Model.Map.getMap;
		
		for (var key in currMap) {
		
			if (key == id) {
				this.Model.shiftStorage({x:currMap[key].x, y: currMap[key].y});
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
		
	}
}
