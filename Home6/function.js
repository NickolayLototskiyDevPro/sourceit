var message=function(textMessage, countRepeat){
			

			function addMessage(newMessage){

				var scopeMessage='';

				function returnString(){
					return scopeMessage=scopeMessage+' '+newMessage;
				}

				return returnString;
			}

			if ( typeof textMessage === 'string' && typeof countRepeat === 'number' &&
				countRepeat>=0 && countRepeat<=100)
			{

				var currentText=addMessage(textMessage);

			for (var i = 1; i <= countRepeat ; i++) {
				
				var newText = document.createElement('div');

				newText.innerHTML = currentText()+i;

				id1.appendChild(newText);
				
			}

			}
			else {
				alert('Error')
			}

		}