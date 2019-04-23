// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red'; 
// items[2].textContent = 'hello world';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

//document.getElementByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'this is world';

// // convert HTML Collection into array
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li,index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

//documet.querySelectorAll
const items  = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
  item.textContent = `${index} : Hello`;
})

const lisOdd = document.querySelectorAll('li:nth-child(odd)');
const lisEven = document.querySelectorAll('li:nth-child(even)');

lisOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

lisEven.forEach(function(li, index){
  li.textContent = 'Omg';
});

for(let i = 0 ; i< lisEven.length; i++){
  lisEven[i].style.background = 'green';
}

console.log(items);
