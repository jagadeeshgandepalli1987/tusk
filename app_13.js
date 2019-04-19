//FUNCTION DECLARATION
// function greet(){
//   console.log('Hello');
//   return 'Hello';
// }

// function greetDe(firstname, lastname){
//   if(typeof firstname === 'undefined'){
//     firstname = 'John';
//   }
// }


function greet(firstname = 'John', lastname = 'Doe'){
  if(typeof firstname === 'undefined'){
    firstname = 'John';
  }

  return 'Hello '+ firstname +' '+lastname;
}

const square = function(x){
  return x*x;
};

console.log(square(9));

//Immediately invokable function expression - IIFEs

// (function(){
//   console.log(`IIFE Ran...`);
// })();

// (function(name){
//   console.log(`hello `+name);
// })('jagadeesh');

let id =100;
const todo = {
  add : function(){
    console.log('Add todo...');
  },
  edit: function(){
    console.log(`edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log(`delete todo...`)
  }

  todo.add();
  todo.edit();
  todo.delete();
