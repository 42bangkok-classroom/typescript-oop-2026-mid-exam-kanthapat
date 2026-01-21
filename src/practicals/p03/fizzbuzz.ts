import test from "node:test";

// Write your code below
const text = process.argv[2];

if (text) {
    const num = Number(text.trim());
    
    if(!isNaN(num) && num > 0) {
        for(let i = 1; i < num+1; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
                console.log('FizzBuzz');
            } else if(i % 3 === 0) {
                console.log('Fizz');
            } else if(i % 5 === 0) {
                console.log('Buzz');
            } else {
                console.log(i)
            }
        }
    }
}