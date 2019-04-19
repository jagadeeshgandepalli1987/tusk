const name = 'Jhon';
const age = 32;
const job = 'Web Developer';
const city = 'Miami';
let html;

//Without template strings(esS)
html ='<ul><li>Name: '+ name + '</li><li>Age: '+age+'</li><li>job:'+job+'</li><li>city: '+city+'</li></ul>';

html = '<ul>'+
      '<li>Name: '+ name + '</li>'+
      '<li>Age: '+ age + '</li>'+
      '<li>Job: '+ job + '</li>'+
      '<li>City: '+ city + '</li>'+
      '</ul>';
function hello(){
  return 'hello';
}
//with template strings (es6)
html =  `<ul>
        <li> Name: ${name}</li>
        <li> Age: ${age} </li>
        <li> Job: ${job}</li>
        <li> City: ${city}</li>
        <li> ${2+2} </li>
        <li> ${hello()}</li>
        <li> ${age > 30 ? 'over 30' : 'under 30'} </li>
        </ul>
        `;


        document.body.innerHTML = html;
