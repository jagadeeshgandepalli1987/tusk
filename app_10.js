let val;

const date = new Date();
const today = new Date('9-10-1981 11:25:00');
let birthday =new Date('September 10 1981');
birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('9/10/1981');

val = birthday;

val = today.getMonth();
val = date.getDate();
val = date.getDay();
val = date.getHours();
val = date.getMinutes();
val = date.getMilliseconds();
console.log(val);
birthday.setMonth(2);
birthday.setDate(22);
birthday.setHours(3);
birthday.setMinutes(30);

console.log(birthday);

