const numbers = [ 1,3,2,6,4,8];

function isEven (number){
    return number % 2 === 0 ;
}

const newArray = numbers.filter(isEven);

console.log( newArray);