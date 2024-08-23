// strings
let college = 'CctB';

console.log(college.toUpperCase(), college.toLowerCase());

let sentence = 'I am a student studying in CCTB, doiong FULL STACK COURSES';
let doesExist = sentence.toLowerCase().includes('cctb');

doesExist = sentence.includes('cctb') || sentence.includes('CCTB');

console.log(doesExist);

let part = sentence.slice(0, 10);
console.log(part)

let words = sentence.split(' ');
console.log(words);

let new_sentence = sentence.replace('CCTB', 'CCTB @ 2024')
console.log(new_sentence);
