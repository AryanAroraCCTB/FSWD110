console.log("Hello, TypeScript!");

interface Person {
    name: string, 
    age: number
}

const createPerson = (name: string, age: number): Person => {
    return {
        "name": name,
        "age": age
    }
}

let p1 = createPerson('p1', 20);
console.log(p1);

// extra details
const greet = (name: string, punctuation: string = '!'): void => {
    console.log(`Hi ${name}${punctuation}`);
}

greet('p1', '.');

function sumArray(numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15