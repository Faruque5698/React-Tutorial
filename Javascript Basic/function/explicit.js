const printName = function (v1, v2, v3) {
    console.log(`${this.name} has 3 virtues: ${v1}, ${v2}, ${v3} `);
}
const ashad = {
    name: "Ashad",
    age: 30,
}

const v1 = "playing cricket";
const v2 = "playing cricket";
const v3 = "playing cricket";

const virtues = [v1, v2, v3];

// printName.call(ashad, v1, v2, v3);
// printName.apply(ashad, virtues);
const bindFunction = printName.bind(ashad,v1, v2, v3);
bindFunction();