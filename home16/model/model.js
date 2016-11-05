class MapFifteen{

	getMap(){
		return this.Map;
	}

	constructor(){

		this.Map={1:{x:0,y:0},
				  2:{x:1,y:0},
				  3:{x:2,y:0},
				  4:{x:0,y:1},
				  5:{x:1,y:1},
				  6:{x:2,y:1},
				  7:{x:0,y:2},
				  8:{x:1,y:2},
				  9:{x:2,y:2},}; 
	}

}

class BaseFifteen{

	init(){
		this.storage.push([0,1,2]);
		this.storage.push([3,4,5]);
		this.storage.push([6,7,8]);
	}

	destruct(){
		//delete this.storage[0];
		//delete this.storage[1];
		//delete this.storage[2];

		this.storage.pop();
		this.storage.pop();
		this.storage.pop();
		
	}

	getStorage(){
		return this.storage;
	}

	shiftStorage(el){

		let value=this.storage[el.y][el.x];

	

		if (el.x > 0){

			if (this.storage[el.y][el.x-1] == 0){
			
			this.storage[el.y][el.x]=this.storage[el.y][el.x-1];
			this.storage[el.y][el.x-1]=value;
			}
		} 

		if (el.x < this.storage.length-1 ){

			if (this.storage[el.y][el.x+1]==0){
			
			this.storage[el.y][el.x]=this.storage[el.y][el.x+1];
			this.storage[el.y][el.x+1]=value;
			}
		}

		if ( el.y > 0 ) {

			if (this.storage[el.y-1][el.x] == 0){
			
			this.storage[el.y][el.x]=this.storage[el.y-1][el.x];
			this.storage[el.y-1][el.x]=value;
			}
		}

		if (el.y < this.storage.length-1 ){
			if (this.storage[el.y+1][el.x]==0) {
			
				this.storage[el.y][el.x]=this.storage[el.y+1][el.x];
				this.storage[el.y+1][el.x]=value;
			}
		}

	}

	constructor(){

		this.storage=[];
		//this.init();
	}
	

}

class Fifteen extends BaseFifteen {

	searZeroEl(){

		let currELM={x:0, y:0};

		for (var i = 0; i <= this.getStorage().length-1; i++) {
			for (var j = 0; j <= this.getStorage().length-1; j++) {
				if (this.getStorage()[i][j] == 0) {
					currELM.y=i;
					currELM.x=j;
					return currELM;
				}
			}
	
	}
	}

	showStorage(){
		let find=this.searZeroEl(),
			currMap=this.Map.getMap();
	
		View.clearView();


		for (var key in currMap) {

			if ( currMap[key].x == find.x && currMap[key].y==find.y){

				View.hiddenView(key);

				}
					else {
						let numb=this.getStorage()[currMap[key].y][currMap[key].x];

						View.visibleView(key, numb);
					}
				}
	}

	constructor(){
		super();

		this.Map=new MapFifteen();
	}

}

