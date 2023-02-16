var interVal=0;
var userLotto = [];
var g_Cnt = 0;

function makeNumber() { 
    const promise = new Promise((resolve,reject) => {
        interVal = setInterval(function() { 
            const pickANum =  Math.floor(Math.random() * 45 + 1);
            console.log(g_Cnt + '번째 : ' +  pickANum)
            userLotto[g_Cnt] = pickANum;
        } , 100);

        resolve(pickANum);
    });

    return promise;
}

async function runTasks() { 
    try { 
        let result = await makeNumber();
        console.log ('result = ' + result + ': g_Cnt = ' + g_Cnt);
    } catch (e) { 
        console.log
    }
}

function run() { 
    runTasks();
    setTimeout(function() {
        clearInterval(interVal);
        console.log(g_Cnt + '번째 확정 번호 : ' + userLotto);
        console.log('-----------------------');
    }  , 3000)
}

run() 