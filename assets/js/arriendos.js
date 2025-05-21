const arriendo = document.querySelector("#alquiler");
const rowArriendo = arriendo.querySelector(".row");

propiedades_arriendo.forEach( (arriendo, index) => {
    console.log(arriendo);

        rowArriendo.innerHTML += `
     <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${arriendo.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${arriendo.nombre}
                </h5>
                <p class="card-text">
                  ${arriendo.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${arriendo.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${arriendo.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${arriendo.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${arriendo.costo} </p>
                <p class="${arriendo.smoke ? "text-success" : "text-danger"}">

                ${
                    arriendo.smoke
                        ? `<i class="fa-solid fa-check"></i> Se permite fumar`
                        : `<i class="fa-solid fa-ban"></i> No se permite fumar`
                }
                </p>

                <p class="${arriendo.pets ? "text-success" : "text-danger"}">

                ${
                    arriendo.pets
                        ? `<i class="fa-solid fa-check"></i> Se permiten mascotas`
                        : `<i class="fa-solid fa-ban"></i> No se permiten mascotas`
                }
                </p>

              </div>
            </div>
       </div>
    `;

    
});