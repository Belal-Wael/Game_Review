import  {Ui}   from './ui.js'

export class Details{

    constructor(id){
        this.ui = new Ui();
        document.getElementById('btn-close').addEventListener('click',function(){

            document.getElementById('Details').style.display='none';
            document.getElementById('Games').style.display='block';
        })
        this.getDetails(id);
    }

    async getDetails(id){

        let loadingElement=document.getElementById('loading');
        loadingElement.classList.remove('d-none');

        const options = {
            method: "GET",
            headers: {
               "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
               "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
         };
         let apiData= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        let JsonData=await apiData.json();
        this.ui.displayDetails(JsonData);
        this.startEvent();
        loadingElement.classList.add('d-none');
    }
    startEvent(){
        document.getElementById('btn-page').addEventListener('click',function (eventInfo) {
            // open(eventInfo.target.getAttribute(url));
            let URLOfPage=eventInfo.target.getAttribute("pageurl");
            console.log(URLOfPage);
            window.location.href = URLOfPage;
            
        })
    }

}