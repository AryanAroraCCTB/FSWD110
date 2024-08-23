// Variables

// ---
// var vs let vs const
// ---

// Comment shortcut:
// Mac: cmd + /
// Windows: ctrl + /

let x = 10;

// Check node version
// node -v

// Running the js file
// node variables.js

// Print to console
console.log("Hello World!");

console.log(x);

x = 11;
console.log(x);

const pi = 3.14;
console.log(pi);

// pi = 3.28; // not allowed since pi is a constant
console.log(pi);

// ---
// typeof
// ---
let age = 10; // int
console.log("age is: ", age, "name is", x);

let age_variable_type = typeof age;
console.log(age_variable_type);

age = "ten";
age_variable_type = typeof age;
console.log(age_variable_type);

let some_var; // undefined
console.log(some_var);

let other_var = null;
let other_var_ = 0;

// string interpolation
let student_name = "XYZ";
let college = "cctb";
let message = "Hello My name is " + student_name + ", I am student at " + college;
message = `Hello My name is ${student_name}, I am student at ${college}`;

function greet(name) {
    return `Hello, ${name}!`;
}

// function some(x) {
//     return `Hello, ${name}!`;
// }

const greet_2 = function (name) {
    return `Hello, ${name}!`;
};

const greet_3 = (name) => {
    return `Hello, ${name}!`;
};

const double_num = (number) => number * 2;

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet_2("Bob"));

// Array
console.log("------------------Array------------------");

const fruits = ["apple", "banana", "cherry"];
console.log(fruits);

const new_length = fruits.push("dragonfruit");
console.log(fruits, new_length);

let removed_fruit = fruits.pop();
console.log(fruits, removed_fruit);

let length_fruits = fruits.length;
let last_fruit = fruits[length_fruits - 1];
fruits.pop();
console.log(last_fruit, fruits);

let first_fruit = fruits.shift();
console.log(fruits);

fruits.unshift("apple");
console.log(fruits);

console.log("------------------Map------------------");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers = ["one", "two", "three", "four"];

let new_numbers = numbers.map(function makeDouble(number, index) {
    // console.log(`I am ${number} at index ${index}`);
    return number * 2;
});

let new_numbers_ = numbers.map((number) => {
    // console.log(`I am ${number} at index ${index}`);
    return number * 2;
});

let new_numbers__ = numbers.map((number) => {
    // console.log(`I am ${number} at index ${index}`);
    if (number % 2 === 0) {
        // even
        return number * 2;
    } else {
        return null;
    }
});

let new_numbers___ = new_numbers__.filter((number, index) => {
    if (number) {
        return true;
    } else {
        return false;
    }
});

// console.log(numbers);
// console.log(new_numbers);
// console.log(new_numbers_);
// console.log(new_numbers__);
// console.log(new_numbers___);

new_numbers = [];
for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    console.log(`I am ${number} at index ${index}`);
    new_numbers.push(number * 2);
}

let nums = numbers
    .map((number) => {
        // console.log(`I am ${number} at index ${index}`);
        if (number % 2 === 0) {
            // even
            return number * 2;
        } else {
            return null;
        }
    })
    .filter((number, index) => {
        if (number) {
            return true;
        } else {
            return false;
        }
    })
    .reduce((prev, current, index) => {
        prev += current;
        return prev;
    });

console.log(nums);

const total = numbers.reduce((prev, current, index) => {
    prev += current;
    return prev;
});

console.log(total);
