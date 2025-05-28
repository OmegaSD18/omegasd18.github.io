let menuTrigger=document.querySelector("#menu-trigger");
let menu=document.querySelector(".menu");
const dropdownButton = document.querySelector('.dropdown-button');

dropdownButton.addEventListener('click', () => {
    dropdownButton.classList.toggle('active');
    menuTrigger.contains(a.target) || menu.classList.add("hidden");
});

menuTrigger.addEventListener("click",function(){ 
    menu.classList.toggle("hidden")
});