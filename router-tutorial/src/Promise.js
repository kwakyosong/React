function increase(number) { 
    const promise = new Promise((resolve,reject) => {
        setTimeout(()=>{
            const result = number + 10;
            if(result > 50) { 
                const e = new Error('NumberTooBig');
                return reject(e);
            }
            resolve(result);
        } ,1000);

    });
    return promise;
}

increase(0)
    .then(number => { 
        console.log('1 = ' + number);
        return increase(number);
    })
    .then(number => { 
        console.log('2 = ' + number);
        return increase(number);
    })
    .then(number => { 
        console.log('3 = ' + number);
        return increase(number);
    })
    .then(number => { 
        console.log('4 = ' + number);
        return increase(number);
    })
    .then(number => { 
        console.log('5 = ' + number);
        return increase(number);
    })
    .then(number => { 
        console.log('6 = ' + number);
        return increase(number);
    })
    .catch(e => { 
        console.log(e);
    })
    