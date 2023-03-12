// task must return true or false
const fakeServerCheck = async () => {
    console.log('check...');
    return Math.random() > 0.8;
  }
  const asyncInterval = async (callback, ms, triesLeft = 3) => {
    return new Promise((resolve, reject) => {
      const interval = setInterval(async () => {
        if (await callback()) {
          resolve();
          clearInterval(interval);
        } else if (triesLeft <= 1) {
          reject();
          clearInterval(interval);
        }
        triesLeft--;
      }, ms);
    });
  }
  const wrapper = async () => {
    try {
      await asyncInterval(fakeServerCheck, 1000);
    } catch (e) {
      console.log('error handling');
    }
    console.log("Done!");
  }
  wrapper();