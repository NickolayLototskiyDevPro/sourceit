var str = 'aa bb ab aa bb aa bb aa  bb ba bb aa bb bb aa bb';
result = (str.match(/aa bb/gi) || [0]).length;
alert(result);
console.log(result);