// Write your code below
const score = Number(process.argv[2].trim());

if(!isNaN(score) && score >= 0 && score <= 100) {
    if(score >= 80) {
        console.log('Grade is A');
    } else if(score >= 70) {
        console.log('Grade is B');
    } else if(score >= 60) {
        console.log('Grade is C');
    } else if(score >= 50) {
        console.log('Grade is D')
    } else {
        console.log('Grade is F');
    }
} else {
    console.log('Invalid input');
}