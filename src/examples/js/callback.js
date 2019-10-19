function orderCoffee(flavor, callback) {
  console.log(`Starting to prepare my ${flavor} coffee.`);
  //async operation here, and when completes we will run the callback
  setTimeout(() => {
    callback(flavor);
  }, 3000);
}

function finished(flavor){
  console.log(flavor + ' coffee delivered!');
}

orderCoffee('late', finished);

orderCoffee('mocha', function(flavor){
  console.log(flavor + ' coffee delivered!');
  //ask another
  orderCoffee('late', function(newFlavor) {
    console.log(newFlavor + ' coffee delivered!');


    //CALLBACK HELL

    //keep ordering coffee, etc. CALLBACK HELL
    /*orderCoffee('vanilla', function(newFlavor) {
      console.log(newFlavor + ' coffee delivered!');
  
      //keep ordering coffee, etc. CALLBACK HELL
    });*/
  });
});