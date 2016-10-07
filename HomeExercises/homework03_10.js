'use strict'
var count = 0;
var string = 'ab ab ba ba abab';
var target = string.indexOf('ab');
while ( target != -1 ){
	count++;
	target = string.indexOf('ab', target + 1);
}
console.log(count);