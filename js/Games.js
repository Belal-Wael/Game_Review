import  { Ui } from "../js/ui.js";
import  { Details } from "../js/details.js";

export class Games{
    constructor(){
         this.getGame("MMORPG")
       let links=document.querySelectorAll("nav .links a");
     for (let i = 0; i < links.length; i++) {
       links[i].addEventListener('click',function(eventInfo){
         //   console.log(eventInfo.target.getAttribute("hamboza"));  // get the word you click in nav
            let dataName =eventInfo.target.getAttribute("hamboza");
           new Games().getGame(dataName);
       });

     }
     
     this.ui = new Ui();
   }

   async getGame(category){

      let loadingElement=document.getElementById('loading');
      loadingElement.classList.remove('d-none');
      
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      };
      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const jsonData = await api.json();
      this.ui = new Ui();
      this.ui.DisplayDataGame(jsonData);
      this.EventOfDetails();
      loadingElement.classList.add('d-none');
   }

   EventOfDetails(){
      let cards=document.querySelectorAll('#card');
      for (let i = 0; i < cards.length; i++) {
         cards[i].addEventListener('click',function(){
            let id=cards[i].children[0].children[0].getAttribute('data-id');
            console.log(id);
            new Games().showDetails(id)
         })
      }
   }
   showDetails(id){
      const details=new Details(id);
      document.getElementById('Games').style.display='none';
      document.getElementById('Details').style.display='block';
   }
}
