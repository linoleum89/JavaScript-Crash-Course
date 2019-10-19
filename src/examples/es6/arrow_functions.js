function Car(props) {
    const {
        name = "",
        brand = "",
        engine = "",
        model = "",
        color = "",
        image = "",
        price = 0
    } = props;

    this.name = name;
    this.brand = brand;
    this.engine = engine;
    this.model = model;
    this.color = color;
    this.image = image !== '' ? image : "https://via.placeholder.com/300";
    this.price = price || '$ ' + price;

    const printName = () => {
        console.log(this.name); //arrow function preserves this
    }
        
    printName();
}

const car = new Car({
    name: 'Ferrari'
});


const upperCaseWord = word => console.log(word.toUpperCase());
        
upperCaseWord('Hello React');