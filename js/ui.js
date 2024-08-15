export class Ui{
    DisplayDataGame(data){ 
     
        let BoxContainer=``;
        for (let i = 0; i < data.length; i++) {
            BoxContainer +=`  <div class="box" id="card">
                <div class="p-container">
                    <img src="${data[i].thumbnail}" alt="" data-id=${data[i].id}>
                    <div class="type">
                        <span class="name">${data[i].title}</span>
                        <span class="state">free</span>
                    </div>
                    <p> ${data[i].short_description.split(" ", 8)}</p>
                </div>
                <div class="footer">
                    <span>${data[i].genre}</span>
                    <span>${data[i].platform}</span>
                </div>
            </div>
            `;
        }
        // console.log(BoxContainer);
        document.getElementById('ContainerOfData').innerHTML=BoxContainer;
    }

    displayDetails(data){

        let BoxDetails=``;
            BoxDetails+=`<img src="${data.thumbnail}" alt="">
                    <div class="info">
                        <h2 class="title">Title:${data.title}</h2>
                        <div>Category:<span> ${data.genre}</span></div>
                        <div>Platform:<span>${data.platform}</span></div>
                        <div>staus:<span>${data.status}</span></div>
                        <p>
                        ${data.description}
                        </p>
                        <button pageurl="${data.game_url}" id="btn-page">Show Game</button>
                    </div>
                `;
        document.getElementById('details').innerHTML=BoxDetails;
    }
}