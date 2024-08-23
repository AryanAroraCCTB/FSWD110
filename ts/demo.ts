// sudo npm install -g ts-node typescript

function add(a: number, b: number): number {
    return a + b;
}
let result = add(1, 2); // 3
result = add(3, 2); // 5

let today = [1];

let marks: any = 10;
marks = 'ten';
marks = true;

interface Student {
    name: string,
    age: number,
    hobbies: string[]
}

let s1: Student = {
    name: 's1',
    age: 10,
    hobbies: ['a']
}


let s2: Student = {
    name: 's2',
    age: 11,
    hobbies: ['b']
}

let students: Student[] = [s1, s2];

interface Course {
    name: string;
    date: Date;
    enrolled_students: Student[];
}




interface Greeter {
  (name: string): string;
}
const greet__: Greeter = (name) => `Hello, ${name}!`;

const greet_ = (name: string): string => `Hello, ${name}!`;

const greet___ = (name: string): string => {
    return `Hello, ${name}!`
};

console.log('rrwjkbr')

