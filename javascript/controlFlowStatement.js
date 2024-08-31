

// Looping for, while, do-while, for-in. for-of

// console.log("For Loop...");

// for (let i=0; i<=5; i++) {
//     console.log(i);
// }

// console.log("while loop...");

// let counter = 3;
// while (counter>0) {

//     console.log(counter);
//     counter--;

// }

// console.log("do..while..loop");
// let doWhileCounter = 3;
// do {
//     console.log('do body');
//     doWhileCounter--;
// } while (doWhileCounter>0);


// console.log("for..in..loop");
// let person = {
//     "john":'dev',
//     "peter":'test'
// };
// for (let key in person) {
//     console.log(key, person[key]);
// }

// console.log("for..of..loop");
// let personArray = [
//     "john", 'dev',
//     "peter", 'test'];
// for (let val of personArray) {
//     console.log(val);
// }

// console.log("Break statement");
// for (let i=1; i<=5; i++) {
//     if (i===3) break;
//     console.log(i);
// }

console.log("Continue statement");
for (let i=1; i<=5; i++) {
    if (i===3) continue;
    console.log(i);
}