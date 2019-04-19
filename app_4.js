let val;

// Number to string
val =5;
val = String(444);
val = String(4+4);
// Bool to String
val = String(true);
//Date to String
val = String(new Date());
//Array to String
val = String([1,2,3,4,5,6]);

// toString()
val = (5).toString();
val = (true).toString();

val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null); 
val = Number('hello');
val = Number([1,2,3,4]);

val = parseInt('100.30');
val = parseFloat('100.30');

console.log(val);
console.log(typeof val);


const val1 = 5;
const val2 = 6;
const sum = val1 + val2;


console.log(sum);
console.log(typeof sum);