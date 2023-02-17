var x = 0;
var y = 0;

var obj = { x:x , y:y };

var randomKeyString = 'other';
var combined = {};

combined['one'+randomKeyString] = 'some value';
var obj2 = { 
    x:x , 
    methodA: function() { console.log('obj2 methodA() Function : method A'); },
    methodB: function() { return 0; }
}

console.log('obj = ' + obj);
console.log('obj = ' + JSON.stringify(obj));
console.log('obj.x = ' + obj.x);

console.log('combined = ' + combined);
console.log('combined = ' + JSON.stringify(combined));
console.log('combined = ' + combined.oneother);

console.log('obj2 = ' + obj2);
console.log('obj2 = ' + JSON.stringify(obj2));
console.log('obj2 = ' + obj2.methodA);
console.log('obj2 methodA() = ' + obj2.methodA()); // console.log만 찍고 return 할게 없다..
console.log('obj2 methodB() = ' + obj2.methodB());

