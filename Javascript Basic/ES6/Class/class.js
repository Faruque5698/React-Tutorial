class person {
    first_name = 'john';
    last_name = 'doe';
    age = 30;
    city = ['new york', 'los angeles', 'chicago'];
    full_name() {
        return this.first_name + ' ' + this.last_name;
    }
}

let p1 = new person();
console.log(p1.full_name());