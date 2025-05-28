let menuTrigger=document.querySelector("#menu-trigger");
let menu=document.querySelector(".menu");

menuTrigger.addEventListener("click",function(){ 
    menu.classList.toggle("hidden")
});

document.body.addEventListener('click', function(a) {
    menuTrigger.contains(a.target) || menu.classList.add("hidden");
});

const dropdownButton = document.querySelector('.dropdown-button');

dropdownButton.addEventListener('click', () => {
    dropdownButton.classList.toggle('active');
});