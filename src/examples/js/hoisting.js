function hoistingExample() {
    let name;
    sayHi();
    
    function sayHi(){
        console.log('say hi! ' + name);
    }

    name = 'Jorge';
    sayHi();
}

hoistingExample();