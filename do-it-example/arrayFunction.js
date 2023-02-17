function add (first, second) { 
    return first + second;
}

console.log('type of add === function : ' + (typeof add === 'function'))

var add2 = function(first,second) { 
    return first + second;
}

console.log('type of add === function : ' + (typeof add2 === 'function'))

var add3 = (first,second) => { return first + second; }
console.log('add3 = ' + add3(1,2));

var addsub = (first,second) => { return ( { add : first + second , sub : first - second }); }
console.log('addsub(add) : ' + addsub(2,1).add)
console.log('addsub(sub) : ' + addsub(2,1).sub)
