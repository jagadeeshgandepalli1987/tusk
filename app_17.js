// console.log(document.head);

const myPElement = document.querySelectorAll('p');

myPElement.forEach(function(p){
p.textContent = 'hai this is me !!!'
})

const myNewPara = document.createElement('p');
myNewPara.textContent = 'I was something to paste';

document.querySelector('body').appendChild(myNewPara);

// const myPElement = document.querySelectorAll('p');

// myPElement.forEach(function(p){
// p.textContent = 'hai this is me !!!'
// })