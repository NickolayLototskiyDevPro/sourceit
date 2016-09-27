var peace='миру мир';
string(peace);

function string(str){
	
	str=str.split(' ') 
		for(var i=0; i<str.length; i++){
		if(str[i]==='мир'){
			str[i]='*****'
			
		}
	}
	str=str.join(' ')
	console.log(str);
	
}

