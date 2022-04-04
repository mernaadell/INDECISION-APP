//arguments para -no longer bound es-6

//this keyword -no bound longer es-6

const add = function (a, b) {
    console.log(arguments)
    return a + b;
}
const addArrow = (a, b) => {
    // console.log(arguments) xx
    return a + b;
}
console.log(add(5, 6, 7, 8))


//this keyword

const user = {
    name: 'Andrew',
    cities: ['alex', 'cairo', 'aswan'],
    printPlacesLived: function () {
        console.log(this.cities)
        let that = this
        this.cities.forEach(function (city) {
            // console.log(this.name) //not accessable in this scope
            console.log(that.name);
            console.log(city)
        });
    }
}

user.printPlacesLived();

//maps
const user2 = {
    name: 'Andrew',
    cities: ['alex', 'cairo', 'aswan'],
    printPlacesLived() {
        //map will return new array
       return this.cities.map((city) => this.name + "lived" + city) 
    }
}
console.log(user2.printPlacesLived());