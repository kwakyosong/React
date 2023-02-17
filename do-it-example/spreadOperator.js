// 전개 연산자

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined1 = [array1[0],array1[1],array2[0],array2[1]];
var combined11 = [...array1, ...array2];
console.log('combined1  = ' + combined1);
console.log('combined11 = ' + combined11);

var combined2 = array1.concat(array2);
var combined3 = [].concat(array1,array2);
console.log('combined2  = ' + combined2);
console.log('combined3  = ' + combined3);

var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';
console.log('first = ' + first + ':' + 'second = ' + second + ':' + three)
var [first,second,three="empty", ...others] = array1; // const로 보통사용
console.log('first = ' + first + ':' + 'second = ' + second + ':' + three)


function func() { 
    var args = Array.prototype.slice.call(this, arguments);
    var first = args[0];
    var others = args.slice(1,args.length);
}
console.log( func() );

var objectOne = { one:1, two:2, other:0 }
var objectTwo = { three:3 , four:4, other:-1}

var combined = { 
    ...objectOne , 
    ...objectTwo 
};
console.log('combined = ' + JSON.stringify(combined));
var { other , ...others } = combined;
console.log('other = ' + JSON.stringify(other) )
console.log('others = ' + JSON.stringify(others) )

var combined = { 
    ...objectTwo , 
    ...objectOne 
}
console.log('combined = ' + JSON.stringify(combined));
var { other , ...others } = combined;
console.log('other = ' + JSON.stringify(other) )
console.log('others = ' + JSON.stringify(others) )

