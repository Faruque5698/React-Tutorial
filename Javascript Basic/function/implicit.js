// implicit bindings

const person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name);
        }
    }
}

const ashad = person("Ashad", 30);
// console.log("test: " + ashad);
ashad.printName();