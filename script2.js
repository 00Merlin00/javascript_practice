const allButtons = document.querySelectorAll(".button button");

for(let button of allButtons) {
    button.addEventListener("click" , function(e){
    return e.target.style.color = "blue",
    e.target.style.background = "yellow"
    })
}