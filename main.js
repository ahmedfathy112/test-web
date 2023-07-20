let dataCard;
let romamticeSec = document.getElementById("auto-romantice");
fetch("card-data.json")
  .then((result) => {
    dataCard = result.json();
    return dataCard;
  })
  .then((result) => {
    for (let i = 0; i <= result.length; i++) {
      romamticeSec.innerHTML += `
          <div class="romantice-card">
          <a href="#">
            <img src="${result[i].image}" alt="" />
          </a>
        </div>
        `;
    }
  });
