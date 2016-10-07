// Connect arrays through a single element. Optimized code.
var a = [1, 3, 5, 6, 7, 8, 9, 10, 11];
var b = [2, 4];
var c = [];

function sum() {
  var i = 0;
  while (typeof ( a[i] && b[i] ) !== 'undefined') {
    c.push(a[i], b[i]);
    i++;
  }
  if (a.length < b.length) {
    c = c.concat( b.slice(i) );
    return c;
  }
  else {
    c = c.concat( a.slice(i) );
    return c;
  }
}

console.log(sum(a));


// Find how many small strings in a large.
var str = 'aa bb cc aa bb cc aa bb cc aa';
    strSmall = 'aa bb';

function searchStr() {
  var arr = str.split(strSmall);
  return (arr.length - 1);
}

console.log(searchStr(str));


// Output: а, аа, ааа, ....
function aaa(n) {
  if (typeof(n) !== 'number') {
    alert('Введите, пожалуйста, число!');
  }
  if (n < 1 || n > 1000) {
    alert('Введите число от 1 до 1000');
  } else {
    if (n !== 1) {
      tmp = aaa(n - 1) + 'a';
      console.log(tmp);
      return tmp;
    }
    console.log('a');
    return ('a');
  }
}

aaa(9);


// Output arithmetical progression (by cycle).
function progression(a1, d, n) {
  if (n % 1 !== 0) {
    throw new Error( 'Введите целое число n' );
  }
  var i = 1;
      progr = [];
  while (i <= n) {
    progr.push(a1 + (i - 1) * d);
    i++;
  }
  return progr;
}

console.log(progression(0, 5, 12));


// Output arithmetical progression (by recursion).
function progr_recursion(a1, d, n, progr = []) {
  if ( (n % 1 !== 0) && (n > 0) ) {
    throw new Error( 'Введите целое число n' );
  }
  if (n !== 0) {
    progr = progr.concat(a1 + (n - 1) * d);
    var c = progr_recursion(a1, d, n - 1, progr);
    return c.reverse();
  } else {
    return progr;
  }
}

console.log(progr_recursion(0, 2, 3));



// Output sum arithmetical progression.
function sumProgression(a1, d, n, S) {
  if ( (n % 1 !== 0) && (n < 0) ) {
    throw new Error( 'Введите целое положительное число n' );
  }
  if (n > 0) {
    S = S || 0;
    S = S + (a1 + (n - 1) * d);
    return sumProgression(a1, d, n - 1, S);
  } else {
    return S;
  }
}

console.log(sumProgression(-2, 2, 4));


// Given an array of integers, every element appears twice except for one. Find that single one.
nums = [1, 4, 1, 3, 5, 4, 5, 2, 3];

function singleNumber(arr) {
  var status = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        status++;
      }
    }
    if(status !== 2) {
      return arr[i];
    }
    status = 0;
  }
}

console.log(singleNumber(nums));

// Variant 2.
function singleNumber_2(arr) {
  var str = arr.join('');
  for (var i = 0; i < str.length; i++) {
    var arrSearch = str.split(str.charAt(i));
    if (arrSearch.length === 2) {
      return str.charAt(i);
    }
  }
}

console.log(singleNumber_2(nums));


// НЕ ДОДЕЛАНО!
// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
var string = 'aabacbln';

function palindrom(str) {
  var arr = [];
      tmp = [];
      result = [];

  for (var i = 0; i < string.length; i++) {
    arr = str.split(str.charAt(i));
    if (arr.length === 2) {
      tmp_1.push(str.charAt(i));
    } if (arr.length % 2 === 0) {
      ml = arr.length - 1;
      ...
    }
  }
  return result;
}

console.log(palindrom(string));
