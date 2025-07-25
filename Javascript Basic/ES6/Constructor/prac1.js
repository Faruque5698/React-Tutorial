class Person{
    first_name;
    last_name;
    age;
    city;
    full_name() {
        return this.first_name + ' ' + this.last_name;
    }

    constructor(){
        console.log('constructor called');
    }
}

let p1 = new Person();
console.log(p1);