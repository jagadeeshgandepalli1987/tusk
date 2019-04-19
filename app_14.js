//for loop

// for(let i = 0; i <= 10; i++){
//   if(i === 2){
//     console.log(`2 is my fav number`);
//     continue;
//   }

//   if(i === 6){
//     console.log(`stop the loop`);
//     break;
//   }

//   console.log(`Number : `+i);
// }

// let i=0;

// do{
//   console.log(`Number `+i);
//   i++;
// }while(i<10);

const cars = ['Ford',`chevy`,`HOnda`,`toyota`];

// for(let i =0; i<cars.length;i++){
//   console.log(cars[i]);
// }

// cars.forEach(function(car){
//   console.log(car);
// });

// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
//   });


// cars.forEach(car => {
//   console.log(car);
// });

// const users = [
// {id: 1,name: 'Jhone'},
// {id: 2,name:'ram'},
// {id: 3,name:'dani'}
// ];

// const ids = users.map(function(user){
// return user.id
// });

// console.log(ids);

const user = {
  firstname : 'John',
  lastname : 'Doe',
  age :45
}

for( let x in user){
  console.log(`${x} : ${user[x]}`);
}

