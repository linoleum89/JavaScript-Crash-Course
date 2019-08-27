function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  //async operation here, and when completes we will run the callback
  callback();
}

function finished(){
  console.log('Finished my homework');
}

doHomework('math', finished);

doHomework('math', function(){
  console.log('Finished my homework');
});