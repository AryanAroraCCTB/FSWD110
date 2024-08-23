// Objects

let person = {
    first_name: "xyyz",
    last_name: 've',
    age: 30,
    isDeveloper: true,
    hobbies: [],

    getFullName: () => {
        // return this.first_name + ' ' + this.last_name;
        return `${this.first_name} ${this.last_name}`;
    }
}

// console.log(person)
// console.log(person.first_name)
// console.log(person.getFullName())

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));