export class display {
    displaycard(data){
        let box = ''
        for (let i = 0; i < data.length; i++) {
            box += `
            <div data-id="${data[i].id}"  class="cardd col-12 col-md-4 col-lg-3">
                    <div class="card p-2 card-bg">
                        <img src="${data[i].thumbnail}" alt="game image">
                        <div class="card-info text-white">
                            <div class="info d-flex justify-content-between mt-3">
                                <h3 class="fs-6 ">${data[i].title}</h3>
                                <p class="px-2 p-1 rounded-2 d-inline-block prise">free</p>
                            </div>
                            <p class="card-text small text-center opacity-50">
                                ${data[i].short_description.split(" ", 8)}
                            </p>
                        </div>
                        <div class="card-footer pt-2 px-0 d-flex justify-content-between">
                            <span class="px-2 rounded-2 d-inline-block text-white span-bg">${data[i].genre}</span>
                            <span class="px-2 rounded-2 d-inline-block text-white span-bg">${data[i].platform}</span>
                        </div>
                    </div>
                </div>
            `
            document.querySelector('#card').innerHTML = box
        }
    }
    displayDetails(data) {
              const content = `
      <div class="col-md-4">
      <img src="${data.thumbnail}" class="w-100" alt="image details" />
   </div>
   <div class="col-md-8">
      <h3>Title: ${data.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
      <p class="small">${data.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
   </div>
      
      `;

      document.getElementById("detailsContent").innerHTML = content;
    }
}
