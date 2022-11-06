
function func(){
    let value = 0 ;
    return function(){
     if ( value<1){
     console.log("hello dear");
     value++ ;
     } else {
        console.log("my second time")
     }
  }
}

const myFunc = func()

myFunc()
myFunc()
