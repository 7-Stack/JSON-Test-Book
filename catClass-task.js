class Cat {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    getName() {
     return this.name;   
    }
    setName() {
        return this.name = new Name;
    }

    getAge() {
        return this.age;
    }
    setAge() {
        return this.age = new Age;
    }

    getLocation() {
        return this.location = new Location;
    }

    catId() {
        return `The name of my cat is ${this.name} and its age is ${this.age}.;`
    }
    catLocation() {
        return `My cat named ${this.name} is located at ${this.location} Enugu.;`
    }
}

const cat = new Cat('Wooz', 1, 'Genesys Hub');

console.log(cat);
console.log(cat.catId());
console.log(cat.catLocation());