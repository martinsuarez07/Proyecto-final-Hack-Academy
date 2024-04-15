// Mi código JavaScript:
var year = document.querySelector(".year");
var marca = document.querySelector(".marca");
var modelo = document.querySelector(".modelo");
var estado = document.querySelector(".estado");
var autos = document.querySelector(".conteiner-autos");
// Años
 
function mostrarYear() {
  for (var i = 2024; i > 1950; i = i - 1) {
    year.insertAdjacentHTML(
      "beforeend",
      `
    <option value="${i}"> ${i} </option>
    `
    );
  }
}
mostrarYear();
 
// Marcas
 
function mostrarMarcas() {
  fetch("https://ha-front-api-proyecto-final.vercel.app/brands")
    .then(function (response) {
      return response.json();
    })
    .then(function (marcas) {
      console.log(marcas);
      for (var marcaX of marcas) {
        marca.insertAdjacentHTML(
          "beforeend",
          `
        <option value="${marcaX}"> ${marcaX} </option>
        `
        );
      }
    });
}
 
mostrarMarcas();

 //Autos
function mostrarAutos() {
  fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
    .then(function (response) {
      return response.json();
    })
    .then(function (auto) {
      for (var autoX of auto) {
        autos.insertAdjacentHTML(
          "beforeend",
          `
          <div class="card mb-3">
          <div class="row g-0">
            <div class="col-12 col-md-4 position-relative">
              <span class="badge text-bg-warning position-absolute nuevo">Nuevo</span>
              <img
                src="${autoX.image}"
                class="img-fluid rounded-start w-100 object-fit-cover imagen-tajeta"
                alt="..."
              />
             
            </div>
            <div class="col-12 col-md-8">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title "> ${autoX.brand} ${autoX.model} </h5>
                  <p class="estrellitas">
                    
                    ${autoX.year} | USD $${autoX.price_usd} | ⭐⭐⭐⭐⭐
                  </p>
                </div>
                <p class="card-text"> ${autoX.description} </p>
                <button class="btn btn-success" type="submit">
                  <i class="bi bi-cart"></i> Comprar
                </button>
                <button class="btn btn-outline-secondary" type="submit">
                  <i class="bi bi-info-square"></i>
                  Mas información
                </button>
                <button class="btn btn-outline-secondary" type="submit">
                  <i class="bi bi-send"></i> Compartir
                </button>
              </div>
            </div>
          </div>
        </div>
        

            `
        );
      }
    });
}
mostrarAutos();

//Modelo

// Modelo
marca.addEventListener("change", function(){
  
  fetch(`https://ha-front-api-proyecto-final.vercel.app/models?brand=${marca.value}`)
  .then(function(response){
    return response.json();
  })
  .then(function(modelos){
      modelo.innerHTML = `<option value="Seleccionar"> Seleccionar </option>`;

    if(modelos.length > 0 ){
      modelo.removeAttribute("disabled")
      for (var elemento of modelos) {
        modelo.insertAdjacentHTML("beforeend", 
        `
        <option value="${elemento}"> ${elemento} </option>
        `)
      } 
    } else {
      modelo.setAttribute("disabled", "");
    }
  })
});