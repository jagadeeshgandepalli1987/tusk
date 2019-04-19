const person = {
  firstname : 'Steve',
  lastname : 'hellol',
  age : 32,
  email : 'steve@gmail.com',
  hobbies : ['Music','Sports'],
  address : {
    city : 'Mimal',
    state : 'MA'
  },
  getBirthYear  : function(){
    return 2019-this.age;
  }
}

let val;

val = person;

val = person.firstname;
val = person['lastname'];
val = person.address;
val = person.getBirthYear()
val = person.address['city'];
val = person.getBirthYear();

console.log(val);


const people = [
{ name : 'Jhon', age : 30},
{ name : 'Mike', age : 23}
];

for(let i=0; i<people.length;i++){
  console.log(people[i].name);
}