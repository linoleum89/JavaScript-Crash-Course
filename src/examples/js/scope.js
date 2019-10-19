const NUMBER_OF_STUDENTS = 15;

function printStudentsMessage() {
    const isReactSchool = true;
    let message = 'There are no active schools right now';
    if (isReactSchool) {
        let myLocalVariable = 'this variable only lives inside this block';
        console.log(myLocalVariable);
        message = 'There are ' + NUMBER_OF_STUDENTS + ' approx. in React School';
    }

    //console.log(myLocalVariable);
    console.log(message);
}

printStudentsMessage();

//console.log(myLocalVariable);
//console.log(isReactSchool);