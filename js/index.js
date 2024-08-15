import {Games} from "../js/Games.js"

new Games();


let links=document.querySelectorAll('nav .links a');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click',function(eventInfo){
        let broElement=links[i].parentElement.children;
        for(let i=0;i<broElement.length;i++){
            broElement[i].style.color='white';
        }
        eventInfo.target.style.color="#09c";
    })
    
}



let menue=document.getElementById("toggleMenue");
menue.addEventListener('click',function () {
    let elementLinks = document.querySelector('nav .links');
    elementLinks.classList.toggle('menueactive');
    
})