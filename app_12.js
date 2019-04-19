const color = 'red';

switch(color){
case 'red' :
        console.log('Color is red');
        break;
        case 'blue' :
        console.log('Color is blue');
        break;
        case 'yellow' :
        console.log('Color is yellow');
        break;
        default:
        console.log('Color is green');
        break;
}

let day;

switch(new Date().getDay()){
  case 0:
    day = 'sunday';
    break;
    case 1:
    day = 'monday';
    break;
    case 2:
    day = 'tuesday';
    break;
    case 3:
    day = 'wednesday';
    break;
    case 4:
    day = 'thursday';
    break;
    case 5:
    day = 'friday';
    break;
    case 6:
    day = 'saturday';
    break;
    
}
console.log(`today is ${day}`);