var queryString = 'banana=10&apple=2&orange=30';

var chunks = queryString.split('&');
console.log('chunks = ' + chunks)  // object

var result = {};
var resultArr = [];

for (var i=0; i< chunks.length ;i++) { 
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = parts[1];
    result[key] = value; // result = { banana: '10' }
    resultArr.push(value);
}

console.log('result = ' + JSON.stringify(result));
console.log('resultArr = ' + resultArr);

var result2 = {};
chunks.forEach((chunk)=>{
    const parts = chunk.split('=');
    const key = parts[0];
    const value = Number(parts[1])
    result2[key] = value;
});
console.log('result2 = ' + JSON.stringify(result2));

var result3 = {};
chunks.forEach(function(chunk) {
    const parts = chunk.split('=');
    const key = parts[0];
    const value = Number(parts[1])
    result3[key] = value;
});
console.log('result3 = ' + JSON.stringify(result3));

var result4 = {};
chunks.forEach(function(chunk) {
    const [key,value] = chunk.split('=');
    result4[key] = Number(value);

});
console.log('result4 = ' + JSON.stringify(result4));

const result5 = chunks.map((chunk)=>{
    const [key ,value] = chunk.split('=');
    return { key:key , value: value};
});
console.log('result5 = ' + JSON.stringify(result5));

function sum(numbers) {
    return numbers.reduce((total,num) => { return total+num }, 0 );
}

console.log('sum reduce = ' + sum([1,2,3,4,5,6,7,8,9,10]))


const result6 = (queryString) => { 
    const chunks = queryString.split('&');
    return chunks 
        .map((chunk) => { 
            const [key,value] = chunk.split('=');
            return {key,value};
        })
        .reduce ((result,item) => { 
            result[item.key] = item.value;
            return result;
        }, {})
    
}

console.log('result6 = ' + JSON.stringify(result6(queryString)))