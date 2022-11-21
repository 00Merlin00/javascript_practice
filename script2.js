const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function change(element,text,color,time,successCallback,failureCallback){
    setTimeout(()=>{
        if(element) {
            element.textContent = text;
            element.style.color = color;
        if(successCallback) {
            successCallback();
        }
            
        }else{
           if(failureCallback) {
            failureCallback();
           }
        }
    
    },time) 
}

change(heading1,"one","violet",1000,()=>{console.log("it's a success")},()=>{
    console.log("element doesnt exist")
})