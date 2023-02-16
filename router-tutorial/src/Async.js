function increment(number) { 
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

async function runTasks() {
    try { 
        let result = await increment(0);
        console.log('1 = ' + result);

        result = await increment(result);
        console.log('2 = ' + result);

        result = await increment(result);
        console.log('3 = ' + result);

        result = await increment(result);
        console.log('4 = ' + result);
        
        result = await increment(result);
        console.log('5 = ' + result);
        
        result = await increment(result);
        console.log('6 = ' + result);
        
        result = await increment(result);
        console.log('7 = ' + result);
    } catch (e) { 
        console.log(e);
    }
}

runTasks();