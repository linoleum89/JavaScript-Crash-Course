async function myAsyncFunction() {
    console.log('Start a request!');
    await new Promise((resolve) => {
            setTimeout(() => {
                resolve(console.log('Request finished!'));
            }, 2000);
            
        });
    console.log('This message will appear after request finish');
    //more code to execute until await is finish
}

myAsyncFunction();