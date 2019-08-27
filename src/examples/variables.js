function myFunction() {
    const MY_CONSTANT_VALUE = 100; //a constant will never change its value, 
                                   //for convention sometimes its good to name it as uppercase
                                   //this type needs to be initialized
    
    var price; //var was the default way to declare variables until the introduction of let & const
                //this variable definition is available inside the function definition

    if(someCondition) {
        let scopedVariable = 'hello';
        console.log(scopedVariable); //'hello'
        console.log(price); //undefined
        price = 30; 
        console.log(price); //30
        console.log(MY_CONSTANT_VALUE); //100
    }
    price = 20;
    console.log(price); //20
    console.log(scopedVariable); //undefined
    console.log(MY_CONSTANT_VALUE); //100
    MY_CONSTANT_VALUE = 50 //
}