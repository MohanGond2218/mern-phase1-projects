let singleQuotesString = 'Hello World!';
let doubleQuotesString = 'Hello World!!!!!';
let templateLiteralString = `Hello my string is: ${singleQuotesString}`
console.log(singleQuotesString);
console.log(singleQuotesString);
console.log(templateLiteralString);

let myStringObj = new String("Hello its new way");
console.log(myStringObj);

let firstChar = myStringObj[0];
let lastChar = myStringObj[myStringObj.length-1];
console.log(`firstChar: ${firstChar}, lastChar: ${lastChar}`)

console.log(`char at 7: ${myStringObj.charAt(7)}`);
console.log(`char code at 7: ${myStringObj.charCodeAt(7)}`);

console.log(`Concatenated String: ${singleQuotesString.concat(doubleQuotesString)}`);

console.log('indexof H',myStringObj.indexOf("H"));

console.log('last Index OF',myStringObj.lastIndexOf('H'));



