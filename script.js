function judging(array,x) {
 for (let i=0; i<array.length; i++) {
 if (array[i]===x ){
   return i;
 }
 
}
return -1;
}

const solving = judging("");

console.log(solving);
