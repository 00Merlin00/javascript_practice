const allButtons = document.querySelectorAll("button");

function myFunc(button){
    return button.style.background="yellow" ,
     button.style.color = "grey" ;

}

allButtons.addEventListener("click" , myFunc)