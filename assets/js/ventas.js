const venta = document.querySelector("#venta");
const rowVenta = venta.querySelector(".row");


propiedades_venta.forEach( (venta, index) => {
console.log(venta);

        rowVenta.innerHTML += `
     <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${venta.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${venta.nombre}
                </h5>
                <p class="card-text">
                  ${venta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${venta.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.costo} </p>
                <p class="${venta.smoke ? "text-success" : "text-danger"}">

                ${
                    venta.smoke
                        ? `<i class="fa-solid fa-check"></i> Se permite fumar`
                        : `<i class="fa-solid fa-ban"></i> No se permite fumar`
                }
                </p>

                <p class="${venta.pets ? "text-success" : "text-danger"}">

                ${
                    venta.pets
                        ? `<i class="fa-solid fa-check"></i> Se permiten mascotas`
                        : `<i class="fa-solid fa-ban"></i> No se permiten mascotas`
                }
                </p>

              </div>
            </div>
       </div>
    `;

});