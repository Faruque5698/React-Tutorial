class Person {
    first_name = 'john';
    last_name = 'doe';
    age= 30;
    static city= ['new york', 'los angeles', 'chicago'];
    full_name() {
        return this.first_name + ' ' + this.last_name;
    }

    constructor() {
        console.log('constructor called');
    }
}

Person.city.push('san francisco'); // Adding a city to the static property
console.log(Person.city); // Accessing the static property directly from the class