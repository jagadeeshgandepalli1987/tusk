// create some arrays
const numbers = [43,44,24,45,66,29,33];
const numbers2 = new Array(22,33,44,23,25);
const fruit = ['Banana','Apple','Grape','Orange','Pear'];
const mixed = [23,'hello',true,undefined,null,{a:1,b:2},new Date()];

let val;

//get array length
val = numbers.length;
//Check if is array
val = numbers[3];
val = numbers[0];
//Insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(24);

//MUTATING ARRAYs
//Add on to end
numbers.push(250);
//Add on to front
numbers.unshift(120);

console.log(numbers);
console.log(val);