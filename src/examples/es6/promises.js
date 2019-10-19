function orderCoffee(flavor, callback) {
    console.log(`Starting to prepare my ${flavor} coffee.`);
    //async operation here, and when completes we will run the callback
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isReady = true;
            if (isReady) {
                resolve({
                    isReady,
                    flavor
                });
            } else {
                reject('The is no more coffee'); //something happened
            }
          }, 3000);
    });
  }
  
  orderCoffee('late').then(({isReady, flavor}) => {
    if (isReady) {
        console.log(`My ${flavor} coffee is ready.`);
    }

    return orderCoffee('vanilla');
  }).then(({isReady, flavor}) => {
    if (isReady) {
        console.log(`My ${flavor} coffee is ready.`);
    }
    //we dont want to ask for coffee anymore
    console.log('Too much coffee!');
  }).catch((error) => {
    console.error('Something happened with my order', error);
  })