const firstname = 'william';
const lastname = 'Johnson';
const age = 32;
const str = 'hai this is me! how are you.';
const tags = 'hello, why are you , doing like this';

let val;
val = firstname + lastname;

//Concatenation
val = firstname + ' ' + lastname;

//Append
val = 'Brad';
val = 'Traversy';

val = 'Hello, my name is '+ firstname +' and I am '+ age;

val = 'That\'s awesome, I can\'t wait';

// Length
val = firstname.length;


// concate
val = firstname.concat('jagadee');

// change case
val = firstname.toUpperCase();
val = firstname.toLowerCase();

val = firstname[2];

val = firstname.indexOf('i');

val = firstname.lastIndexOf('l');

// charAt()

val = firstname.charAt('2');

val = firstname.charAt(firstname.lastIndexOf-1);

val = firstname.substring(0,4);

val = firstname.slice(-3);

val = str.split(' ');

val = tags.split(',');

val = str.replace('hai','Jack');

//includes()
val = str.includes('foo');

console.log(val);