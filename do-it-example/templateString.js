// 템플릿 문자열
var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting1 = string1 + ' ' + string2;
var greeting2 = `${string1} ${string2}`;
console.log('greeting1 = ' + greeting1)
console.log('greeting2 = ' + greeting2)


var product = { name: '도서' , price : '4200원' };
var message1 = '제품 ' + product.name + ' 의 가격은 ' +  product.price + ' 입니다.';
var message2 = `제품 ${product.name} 의 가격은 ${product.price} 입니다.`;
console.log('message1 = ' + message1);
console.log('message2 = ' + message2);

var value1 = 1;
var value2 = 2;
var boolValue = true;
var operator1 = '곱셈값은 ' + (value1+value2) + ' 입니다.';
var operator2 = `곱셈값은 ${value1 * value2} 입니다`;
console.log('operator1 = ' + operator1);
console.log('operator2 = ' + operator2);
var operator4 = '불리언값은 ' + (boolValue ? '참' : '거짓') + ' 입니다.';
var operator5 = `불리언값은 ${boolValue ? '참' : '거짓'} 입니다.`;
console.log('operator4 = ' + operator4)
console.log('operator5 = ' + operator5)

var cart = { name:'도서', price:1500};
var getTotal1 = cart => { 
    return cart.price + '원';
}
var getTotal2 = (cart) => { 
    return cart.price + '원';
}

var getTotal3 = function(cart) { 
    return cart.price + '원';
}

function getTotal4(cart) { 
    return cart.price + '원';
}

console.log(`장바구니에 ${cart.name} 가 있습니다. 금액은 ` + getTotal1(cart) + '입니다.')
console.log(`장바구니에 ${cart.name} 가 있습니다. 금액은 ` + getTotal2(cart) + '입니다.')
console.log(`장바구니에 ${cart.name} 가 있습니다. 금액은 ` + getTotal3(cart) + '입니다.')
console.log(`장바구니에 ${cart.name} 가 있습니다. 금액은 ` + getTotal4(cart) + '입니다.')
