/*
const myNewPara = document.createElement('p');
myNewPara.textContent = 'I was something to paste';

document.querySelector('body').appendChild(myNewPara);

document.querySelector('button').addEventListener('click', (event)=> {
  // console.log('button was pressed !!!');
  // console.log(event);
  event.target.textContent =`I was clicked`;
})

// eventlistner js mdn

function myValidation(){
  let myValue = document.getElementById('myForm').value;

  if(isNaN(myValue)| myValue < 1 | myValue > 20){
    // console.log('Not a valid input');
    }else{
      console.log("this is valid input");
    }
}
*/


let val;
val = document;
val = document.all;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;


val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src'); 

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
  console.log(script)
})


console.log(val);