
var circle = { 
    center : { x:1.0 , y:2.0 } ,
    radius : 2.5 , 
    area : function() { 
        return Math.PI * this.radius * this.radius;
    }
}

console.log("circle.area = " + circle.area());

circle.translate = function(a,b) { 
    this.center.x = this.center.x + a;
    this.center.x = this.center.y + b;
}

circle.translate(1,2);

console.log("circle.center = " + JSON.stringify(circle.center));

function ACircle(center, radius) { 
    this.center = center; 
    this.radius = radius;

    this.area = function () { 
        return Math.PI * this.radius * this.radius;
    }
}

var p = { x:0,y:0};
var newCircle = new ACircle(p,2.0);

console.log("newCircle.center = " + JSON.stringify(newCircle.center));
console.log("newCircle.center = " + JSON.stringify(newCircle));
console.log("newCircle.center = " + newCircle.area());

var evens = new Array(2,4,6,8,10);
console.log("evens.length = " + evens.length);

evens[0] = p;
console.log("evens = " + JSON.stringify(evens));

console.time("answer_time");
for(var i=0;i<100000000;i++){}
console.timeEnd("answer_time");

console.dir(newCircle)

console.dir(p);
console.dir(circle);


var obj = {a:1,b:2,c:3};

for(var p in obj) { 
    console.log("p key = " + p);
    console.log("p value = " + obj[p]);
}

for(var p of Object.entries(obj)) { 
    console.log("p  = " + p);
}

var square = function(x) { return x*x; }

console.log(square(5));

function square2(x) { 
    return x*x;
}

console.log(square2(5));


var square3 = x => x*x;

console.log("square3 = " + square3(3));

var count = 0 ;
function makeCounter() { 
    return function() { 
        return count++;
    }
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
