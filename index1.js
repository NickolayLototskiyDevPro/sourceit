/*
написать ДЗ ПО
'a'
'aa'
'aaa'
'aaaa'
'aaaaa'

n - число до 1000
n > 1000
error
*/

var hi = 'Hello';

console.log(hi);

var kol_vo = 1001;
var str = function (len)
{
	 if(typeof len === 'number')
	 {
   			if (len <=	 1000)
			{
				var counta = " ";
				for (var i = 0; i <=len ; i++) 
				{
					counta = counta + 'a';
					//counta = counta + "a\n";
					console.log(counta);
				};
			}
			else
				{
					console.log('More than 1000'); 
				};
	}
	else 
	{
  		console.log('Enter the number please!');
 	};
};

str(5);
str(kol_vo);
str(hi);




