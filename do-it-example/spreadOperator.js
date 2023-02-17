// 전개 연산자

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined1 = [array1[0],array1[1],array2[0],array2[1]];
var combined2 = array1.concat(array2);
var combined3 = [].concat(array1,array2);
var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';

function func() { 
    var args = Array.prototype.slice.call(this, arguments);
    var first = args[0];
    var others = args.slice(1,args.length);
}

console.log('combined1 =' + combined1);
console.log('combined2 =' + combined2);
console.log('combined3 =' + combined3);
console.log( func() );

//var array2 = [ { name:'도서' , price: 1500}, { name:'비디오' , price: 2000 }]