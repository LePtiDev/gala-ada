

var cross = document.getElementById("cross");
var menu = document.getElementById("menu-burger");

var trait1 = document.getElementById("trait1");
var trait2 = document.getElementById("trait2");
var trait3 = document.getElementById("trait3");

cross.addEventListener("click", function(){
    menu.classList.toggle("menu-burger-after");
    trait1.classList.toggle("trait1-after");
    trait2.classList.toggle("trait2-after");
    trait3.classList.toggle("trait3-after");
});