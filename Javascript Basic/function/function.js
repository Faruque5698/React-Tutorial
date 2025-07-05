// 4 ways to define functions in javaScripts

// #1 - Regular function

function  regularAdd(x,  y) {
    return  x + y;
}

// #2 - Function  Expression

const expressionAdd = function (x,  y) {
    return x + y;
}

// #3 - Arrow function

const arrowAdd = (x, y) => x + y;
// const arrowAdd = (x, y) => {
//  return x + y;
// }

// Testing
console.log("regularAdd: "+regularAdd(3, 4));
console.log("expressionAdd: "+expressionAdd(3, 4));
console.log("arrowAdd: "+arrowAdd(3, 4));

// #4 - Constructor function

function Point(x, y) {
    this.x = x;
    this.y = y;
}

const point = new Point(2, 3);
console.log("point.x: " + point.x + " , point.y: " + point.y);

// Notes
// function name starts with lower case letter best practise
// function 'return' undefined by default
// regular functions get hoisted
// default value for parameters
// parameter vs argument - coin slot vs coin

//  function name cannot be a reserved keyword
//  reserved keywords according to ES6

//  abstract arguments await boolean
//  break byte case switch
//  char class const continue
// debugger default delete do
//  double else enum eval
//  export extends false final
// finally float for function
// goto if implements import
// in instanceof int interface

// best way to pass argument
function test(options = {}) {
    options,x = options.x || 0;
    options.y = options.y || 0;
    options.z = options.z || 0;

    return options.x + options.x + options.y + options.z;
}

console.log("test: " + test({ y: 3, z: 2, x: 5 }));
console.log("test: " + test());




























